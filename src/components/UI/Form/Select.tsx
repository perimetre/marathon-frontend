import classNames from 'classnames';
import { useField } from 'formik';
import React, { useMemo } from 'react';

type TextInputProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
  name: string;
  label?: string;
};

export const Select: React.FC<TextInputProps> = ({ name, label, className, children, ...props }) => {
  const [field, meta] = useField(name);
  const error = useMemo(() => (meta.touched ? meta.error : undefined), [meta]);

  return (
    <div>
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
          className={classNames('font-bold uppercase select form-select', className)}
        >
          {children}
        </select>
      </span>
      {error && <p className="mui-animate-fade-down text-mui-error">{error}</p>}
    </div>
  );
};