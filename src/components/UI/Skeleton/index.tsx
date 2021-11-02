import classNames from 'classnames';
import React from 'react';

type SkeletonProps = {
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ className }) => <div className={classNames('mui-skeleton', className)} />;

export default Skeleton;
