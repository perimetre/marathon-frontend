import classNames from 'classnames';
import { useField } from 'formik';
import { useEffect, useMemo } from 'react';
import { Unit } from '../../../types/unit';
import { convertInToMmFormatted, convertMmToInFormatted } from '../../../utils/conversion';

const UnitTextInput: React.FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string;
    unit?: Unit;
  }
> = ({ name, unit, className, children, ...props }) => {
  const [field, meta, helper] = useField(name);
  const error = useMemo(() => (meta.touched ? meta.error : undefined), [meta]);

  useEffect(() => {
    if (unit === 'mm' && field.value && isNaN(Number(field.value))) {
      const conversion = convertInToMmFormatted(field.value);
      helper.setValue(conversion);
    }
    if (unit === 'in' && field.value && !isNaN(Number(field.value))) {
      const conversion = convertMmToInFormatted(field.value);
      helper.setValue(conversion);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit]);

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
          className={classNames(
            'flex-1 w-full px-3 py-2 bg-gray-100 border-0 rounded-sm h-14 form-input mui-input-base',
            className
          )}
        />
        {children}
      </span>
      {error && <p className="mui-animate-fade-down text-mui-error">{error}</p>}
    </div>
  );
};

export default UnitTextInput;
