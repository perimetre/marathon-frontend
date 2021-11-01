import React from 'react';
import classnames from 'classnames';

type ProgressBarProps = {
  /**
   * The progress amount in a 0 to 100 format
   */
  progress: number;
  className?: string;
  color?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className, color }) => {
  return (
    <div
      className={classnames(
        color,
        'w-full overflow-hidden border-2 p-1 border-mui-placeholder-color h-6 mui-border-radius',
        className
      )}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className="absolute top-0 bottom-0 mui-border-radius transition-all bg-mui-placeholder-color"
          data-progress={progress}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
