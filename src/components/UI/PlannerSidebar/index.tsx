import React, { useCallback, useEffect, useState } from 'react';
import { ModuleDataFragment } from '../../../apollo/generated/graphql';
import { AnimatePresence, motion } from 'framer-motion';
import SidebarModules from './SidebarModules';
import SidebarCategories from './SidebarCategories';
import { usePlannerContext } from '../../Providers/PlannerProvider';

export type PlannerSidebarState = 'closed' | 'categories' | 'modules';

export type PlannerSidebarProps = {
  project?: {
    title?: string | null;
    modules?: ModuleDataFragment[];
  } | null;
  isSidebarOpen?: boolean;
  loading: boolean;
};

export type PlannerSidebarCategories = NonNullable<
  NonNullable<PlannerSidebarProps['project']>['modules']
>[number]['categories'][number];

const animationVariants = {
  categories: { width: '20%', opacity: 1 },
  modules: { width: '35%', opacity: 1 },
  closed: { width: '0%', opacity: 0 }
};

const PlannerSidebar: React.FC<PlannerSidebarProps> = ({ project, isSidebarOpen, loading }) => {
  const { state: plannerState } = usePlannerContext();
  const [state, setState] = useState<PlannerSidebarState>('categories');
  const [category, setCategory] = useState<PlannerSidebarCategories | undefined>();

  const onCategoryClick = useCallback((category) => {
    setCategory(category);
    setState('modules');
  }, []);

  const onCategoryCloseClick = useCallback(() => {
    setState('categories');
  }, []);

  const handleCategoryOpen = useCallback(() => {
    if (state === 'categories' && project?.modules) {
      const all = project?.modules[0].categories.find((f) => f.slug === 'all');
      onCategoryClick(all);
    }
  }, [state, project, onCategoryClick]);

  useEffect(() => {
    if (plannerState === 'Selected') {
      handleCategoryOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plannerState]);

  return (
    <motion.div
      variants={animationVariants}
      initial={state}
      animate={!isSidebarOpen ? 'closed' : state}
      className="z-10 flex-none shadow-lg"
      transition={{ type: 'spring', stiffness: 350, damping: 40 }}
    >
      <AnimatePresence>
        {isSidebarOpen &&
          (!loading ? (
            <>
              {state === 'categories' && (
                <SidebarCategories key="categories" project={project} onCategoryClick={onCategoryClick} />
              )}
              {state === 'modules' && (
                <SidebarModules
                  key="modules"
                  modules={project?.modules}
                  category={category}
                  onCloseClick={onCategoryCloseClick}
                />
              )}
            </>
          ) : (
            <>Loading</>
          ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlannerSidebar;
