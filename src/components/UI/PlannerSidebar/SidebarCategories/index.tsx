import React, { useMemo } from 'react';
import { uniqBy } from 'lodash';
import { motion } from 'framer-motion';
import { PlannerSidebarCategories, PlannerSidebarProps } from '../index';

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

export default SidebarCategories;
