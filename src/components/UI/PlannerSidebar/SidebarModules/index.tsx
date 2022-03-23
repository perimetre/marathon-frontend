import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import SkeletonImage from '../../SkeletonImage';
import { PlannerSidebarCategories, PlannerSidebarProps } from '../index';
import SidebarModuleDetail from '../../../Elements/SidebarModuleDetail';
import { ArrowLeft } from 'react-feather';
import { usePlannerContext } from '../../../Providers/PlannerProvider';

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
  const { state: projectState, projectModule, didFinishSetup } = usePlannerContext();

  const modules = useMemo(
    () => modulesProps?.filter((module) => module.categories.some((cat) => cat.slug === category?.slug)),
    [modulesProps, category]
  );

  const [selectedModuleId, setSelectedModuleId] = useState<number>(modules && modules[0] ? modules[0].id : -1);
  const selectedModule = useMemo(() => modules?.find((x) => x.id === selectedModuleId), [selectedModuleId, modules]);

  useEffect(() => {
    if (didFinishSetup && projectState === 'Selected' && projectModule) {
      const moduleId = projectModule.module.id;

      const isSub = modules?.find((module) => module.rules?.rules?.options?.includes(projectModule.module.partNumber));

      if (modules?.some((x) => x.id === moduleId) || isSub) {
        setSelectedModuleId(isSub ? isSub.id : moduleId);
        const element = document.getElementById(`module-${isSub ? isSub.id : moduleId}`);
        const divElement = document.getElementById('sidebar-scrollbar');
        if (divElement && element) {
          divElement.scrollTo({
            // 138px Is the size of the distance from the top to the scroll
            top: Number(element.offsetTop - divElement.getBoundingClientRect().top - 138),
            behavior: 'smooth'
          });
        }
      }
    }
  }, [projectModule, projectState, didFinishSetup, modules]);

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
            <button className="flex items-center justify-center p-4 font-bold gap-4 group" onClick={onCloseClick}>
              <ArrowLeft className="text-2xl mt-0.5" />
              <span>{category.name}</span>
            </button>
          </div>
          {/* Bottom Section */}
          {/* By setting the height value to any value with h-0, we force it to recalculate, which shows the scrollbar */}
          <div className="h-full grid grid-cols-sidebarModule mui-scrollbar">
            <motion.div
              className="flex flex-col p-4 mr-4 overflow-auto gap-4"
              variants={container}
              initial="hidden"
              animate="show"
              id="sidebar-scrollbar"
            >
              {modules?.map((module) => (
                <motion.div variants={item} key={module.id} id={`module-${module.id}`}>
                  <button
                    className={classNames(
                      'flex flex-col items-center justify-center w-full h-full px-2 py-4 bg-white shadow-md mui-border-radius hover:scale-105 transition-all duration-75 active:scale-100 active:transition-none border-2 border-solid border-white',
                      {
                        '!border-mui-primary': module.id === selectedModuleId
                      }
                    )}
                    onClick={module.id !== selectedModuleId ? () => setSelectedModuleId(module.id) : undefined}
                  >
                    {module.thumbnailUrl ? (
                      <div className="relative w-full h-24 xl:h-36">
                        <SkeletonImage
                          key={module.partNumber}
                          src={module.thumbnailUrl}
                          alt={module.partNumber}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-36" />
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
