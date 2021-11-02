import React, { useCallback, useMemo, useState } from 'react';
import { ModuleDataFragment } from '../../../apollo/generated/graphql';
import { uniqBy } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import { AnimatePresence, motion } from 'framer-motion';
import SkeletonImage from '../SkeletonImage';
import classNames from 'classnames';

type PlannerSidebarState = 'closed' | 'categories' | 'modules';

type PlannerSidebarProps = {
  project?: {
    title?: string | null;
    modules?: ModuleDataFragment[];
  } | null;
  isSidebarOpen?: boolean;
};

type PlannerSidebarCategories = NonNullable<
  NonNullable<SidebarCategoriesProps['project']>['modules']
>[number]['categories'][number];

type SidebarCategoriesProps = Pick<PlannerSidebarProps, 'project'> & {
  onCategoryClick: (category: PlannerSidebarCategories) => void;
};

const SidebarCategories: React.FC<SidebarCategoriesProps> = ({ project, onCategoryClick }) => {
  const categories = useMemo(() => {
    if (project?.modules) {
      return uniqBy(
        // Remove duplicates
        project.modules.flatMap((module) => module.categories as PlannerSidebarCategories[]),
        'slug'
      );
    }

    return undefined;
  }, [project]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      className="flex flex-col h-full"
    >
      <p className="flex-grow-0 mx-4 my-6 text-base font-bold text-mui-primary">{project?.title}</p>
      <div className="flex items-center justify-center flex-grow">
        {categories &&
          categories.map((category) => (
            <button
              key={category.id}
              className="w-full p-4 text-lg font-bold text-left border-t border-b border-gray-300 text-mui-dark hover:bg-gray-50 transition-colors duration-100 active:translate-y-0.5"
              onClick={() => onCategoryClick(category)}
            >
              {category.name}
            </button>
          ))}
      </div>
    </motion.div>
  );
};

type SidebarModulesProps = Pick<NonNullable<PlannerSidebarProps['project']>, 'modules'> & {
  category?: PlannerSidebarCategories;
  onCloseClick: () => void;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, translateY: '2rem' },
  show: { opacity: 1, translateY: '0rem' }
};

const SidebarModules: React.FC<SidebarModulesProps> = ({ modules: modulesProps, category, onCloseClick }) => {
  const modules = useMemo(
    () =>
      modulesProps?.filter(
        (module) => !module.isSubmodule && module.categories.some((cat) => cat.slug === category?.slug)
      ),
    [modulesProps, category]
  );

  const [selectedModuleId, setSelectedModuleId] = useState<number>(modules ? modules[0].id : -1);
  const selectedModule = useMemo(() => modules?.find((x) => x.id === selectedModuleId), [selectedModuleId, modules]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      className="flex flex-col h-full"
    >
      {category && (
        <>
          {/* Top section(title and close button) */}
          <div className="flex items-center justify-between flex-grow-0">
            <p className="px-4 text-lg font-bold">{category.name}</p>
            <button className="flex items-center justify-center p-4 text-red-600 gap-4 group" onClick={onCloseClick}>
              <span>
                <FormattedMessage id="common.close" />
              </span>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-2xl mt-0.5 group-hover:scale-125 transition-transform duration-75 group-active:scale-100 group-active:transition-none"
              />
            </button>
          </div>
          {/* Bottom Section */}
          {/* By setting the height value to any value with h-0, we force it to recalculate, which shows the scrollbar */}
          <div className="flex flex-grow h-0 mui-scrollbar">
            <motion.div
              className="flex flex-col p-4 mr-4 overflow-auto gap-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {modules?.map((module) => (
                <motion.div variants={item} key={module.id}>
                  <button
                    className={classNames(
                      'flex flex-col items-center justify-center w-full h-full px-2 py-4 bg-white shadow-md mui-border-radius hover:scale-105 transition-all duration-75 active:scale-100 active:transition-none border-2 border-solid border-white',
                      {
                        'border-mui-primary': module.id === selectedModuleId
                      }
                    )}
                    onClick={module.id !== selectedModuleId ? () => setSelectedModuleId(module.id) : undefined}
                  >
                    {module.thumbnailUrl ? (
                      <SkeletonImage src={module.thumbnailUrl} alt={module.partNumber} width={144} height={144} />
                    ) : (
                      <div className="w-36 h-36"></div>
                    )}
                    <p className="mt-2 text-sm font-bold text-center">{module.partNumber}</p>
                  </button>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex-grow">{selectedModule && <>{selectedModule.partNumber}</>}</div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const animationVariants = {
  categories: { width: '20%', opacity: 1 },
  modules: { width: '35%', opacity: 1 },
  closed: { width: '0%', opacity: 0 }
};

const PlannerSidebar: React.FC<PlannerSidebarProps> = ({ project, isSidebarOpen }) => {
  const [state, setState] = useState<PlannerSidebarState>('categories');
  const [category, setCategory] = useState<PlannerSidebarCategories | undefined>();

  const onCategoryClick = useCallback((category) => {
    setCategory(category);
    setState('modules');
  }, []);

  const onCategoryCloseClick = useCallback(() => {
    setState('categories');
  }, []);

  return (
    <motion.div
      variants={animationVariants}
      initial={state}
      animate={!isSidebarOpen ? 'closed' : state}
      className="z-10 flex-none shadow-lg"
      transition={{ type: 'spring', stiffness: 350, damping: 40 }}
    >
      <AnimatePresence>
        {isSidebarOpen && (
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
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlannerSidebar;
