import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReactPortal from '../ReactPortal';
import classnames from 'classnames';

const placementClassnameMap = {
  // top: 'top-0',
  'top-start': 'top-0 left-0',
  'top-end': 'top-0 right-0',
  // right: '',
  'right-start': 'top-0 right-0',
  'right-end': 'bottom-0 right-0',
  // bottom: '',
  'bottom-start': 'bottom-0 left-0',
  'bottom-end': 'bottom-0 right-0',
  // left: '',
  'left-start': 'top-0 left-0',
  'left-end': 'bottom-0 left-0'
};

const variantClassnameMap = {
  default: 'bg-white border-gray-200',
  error: 'bg-mui-error font-bold text-white'
};

export type ToastrRef = {
  open: (timer?: number, done?: () => void) => void;
};

export type ToastrProps = {
  placement?: keyof typeof placementClassnameMap;
  variant?: keyof typeof variantClassnameMap;
  timer?: number;
  className?: string;
  children?: React.ReactNode | string;
};

const Toastr = forwardRef<ToastrRef, ToastrProps>(function Toastr(
  { placement = 'bottom-end', variant = 'default', timer = 3, className, children },
  ref
) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      open: (newTimer, done) => {
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);

          if (done) done();
        }, (newTimer || timer) * 1000);
      }
    }),
    [timer]
  );

  return (
    <ReactPortal selector="#toast-root">
      {isOpen && (
        <div
          className={classnames(
            placementClassnameMap[placement],
            variantClassnameMap[variant],
            'rounded-md absolute z-50 p-8 m-4 max-w-md shadow-md border border-solid mui-animate-fade-up duration-100',
            className
          )}
        >
          {children}
        </div>
      )}
    </ReactPortal>
  );
});

export default Toastr;
