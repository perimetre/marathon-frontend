import classNames from 'classnames';
import { useField } from 'formik';
import React, { useMemo } from 'react';

type SelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
  name: string;
  label?: string;
  classNameContainer?: HTMLSelectElement['className'];
};

export const Select: React.FC<SelectProps> = ({ name, label, classNameContainer, className, children, ...props }) => {
  const [field, meta] = useField(name);
  const error = useMemo(() => (meta.touched ? meta.error : undefined), [meta]);

  return (
    <div className={classNames(classNameContainer)}>
      <label className="text-gray-700 uppercase" htmlFor={props.id}>
        {label}
      </label>
      <span>
        <select
          {...props}
          {...field}
          onChange={(e) => {
            if (props.onChange) props.onChange(e);
            field.onChange(e);
          }}
          id={`Select-${name}`}
          className={classNames(
            'font-bold uppercase select form-select focus:ring-0 focus:ring-transparent',
            className
          )}
        >
          {children}
        </select>
      </span>
      {error && <p className="mui-animate-fade-down text-mui-error">{error}</p>}
    </div>
  );
};
