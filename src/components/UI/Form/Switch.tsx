import classNames from 'classnames';
import { useField } from 'formik';
import React, { useMemo } from 'react';

type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children' | 'type'> & {
  name: string;
};

const Switch: React.FC<SwitchProps> = ({ name, ...props }) => {
  const [field, meta] = useField({ type: 'checkbox', name });
  const error = useMemo(() => (meta.touched ? meta.error : undefined), [meta]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          {...props}
          {...field}
          onChange={(e) => {
            if (props.onChange) props.onChange(e);
            field.onChange(e);
          }}
          className="hidden"
        />
        <div className="relative mx-4 cursor-pointer">
          <div className="block h-8 bg-gray-200 rounded-full w-14" />
          <div
            className={classNames(
              'absolute left-1 top-1 w-6 h-6 rounded-full transition transform',
              field.checked ? 'translate-x-full bg-mui-primary' : 'bg-mui-gray-300'
            )}
          />
        </div>
      </label>
      {error && <p className="mui-animate-fade-down text-mui-error">{error}</p>}
    </>
  );
};

export default Switch;
