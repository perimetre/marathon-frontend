import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import SkeletonImage from '../../SkeletonImage';
import { PlannerSidebarCategories, PlannerSidebarProps } from '../index';
import SidebarModuleDetail from '../../../Elements/SidebarModuleDetail';

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

type SidebarModulesProps = Pick<NonNullable<PlannerSidebarProps['project']>, 'modules'> & {
  category?: PlannerSidebarCategories;
  onCloseClick: () => void;
};

const SidebarModules: React.FC<SidebarModulesProps> = ({ modules: modulesProps, category, onCloseClick }) => {
  const modules = useMemo(
    () =>
      modulesProps?.filter(
        (module) => !module.isSubmodule && module.categories.some((cat) => cat.slug === category?.slug)
      ),
    [modulesProps, category]
  );

  const [selectedModuleId, setSelectedModuleId] = useState<number>(modules && modules[0] ? modules[0].id : -1);
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
            <button className="flex items-center justify-center font-bold p-4 gap-4 group" onClick={onCloseClick}>
              <FontAwesomeIcon icon={faAngleLeft} className="text-2xl mt-0.5 mui-animate-group-hover" />
              <span>{category.name}</span>
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
                      <div className="w-36 h-36" />
                    )}
                    <p className="mt-2 text-sm font-bold text-center">{module.partNumber}</p>
                  </button>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex-grow">{selectedModule && <SidebarModuleDetail module={selectedModule} />}</div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default SidebarModules;
