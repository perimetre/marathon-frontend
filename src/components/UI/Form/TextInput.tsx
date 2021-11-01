import classNames from 'classnames';
import { useField } from 'formik';
import React, { useMemo } from 'react';

type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  name: string;
};

export const TextInput: React.FC<TextInputProps> = ({ name, className, children, ...props }) => {
  const [field, meta] = useField(name);
  const error = useMemo(() => (meta.touched ? meta.error : undefined), [meta]);

  return (
    <div className="w-full">
      <span>
        <input
          {...props}
          {...field}
          onChange={(e) => {
            if (props.onChange) props.onChange(e);
            field.onChange(e);
          }}
          id={`TextInput-${name}`}
          className={classNames('flex-1 w-full px-3 py-2 bg-gray-200 rounded-sm h-14 form-input', className)}
        />
        {children}
      </span>
      {error && <p className="mui-animate-fade-down text-mui-error">{error}</p>}
    </div>
  );
};
