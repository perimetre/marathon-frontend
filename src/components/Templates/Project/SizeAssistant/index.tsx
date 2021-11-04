import { FormattedMessage, useIntl } from 'react-intl';
import { Unit } from '../../../../types/unit';
import * as yup from 'yup';
import { Form, Formik, useField } from 'formik';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import ProjectCreationTemplate from '../../ProjectCreation';
import { Select } from '../../../UI/Form/Select';
import classNames from 'classnames';

export type SizeAssistantTemplateProps = {
  unit: Unit;
  gable: { display: string; value: string | number | null }[];
  loading?: boolean;
  onSubmit: (form: { gable: number | null; width: number | null }) => void;
  initialValue: { gable?: number; width?: number };
};

const FakerTextInput: React.FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string;
    unit: Unit;
  }
> = ({ name, className, children, ...props }) => {
  const [field, meta] = useField(name);
  const error = useMemo(() => (meta.touched ? meta.error : undefined), [meta]);

  // useEffect(() => {
  //   helper.setValue(unit === 'mm' ? convertInToMm('', '', '') : convertMmToIn(field.value));
  // }, [unit, helper]);

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
            'flex-1 w-full px-3 py-2 bg-gray-200 rounded-sm h-14 form-input mui-input-base',
            className
          )}
        />
        {children}
      </span>
      {error && <p className="mui-animate-fade-down text-mui-error">{error}</p>}
    </div>
  );
};

const SizeAssistantTemplate: React.FC<SizeAssistantTemplateProps> = ({
  unit,
  loading,
  gable,
  onSubmit,
  initialValue
}) => {
  const router = useRouter();

  const intl = useIntl();

  const schema = useMemo(
    () =>
      yup.object().shape({
        gable: yup.number().nullable().label('Thickness').required(),
        width: yup.number().nullable().label('Weight').required()
      }),
    []
  );

  return (
    <Formik
      initialValues={{
        gable: initialValue?.gable || null,
        width: initialValue?.width || null
      }}
      onSubmit={onSubmit}
      validationSchema={schema}
      validateOnMount
    >
      {({ isValid }) => (
        <Form>
          <ProjectCreationTemplate
            step={5}
            title={intl.formatMessage({ id: 'project.sizeAssistantTitle' })}
            disableNext={!isValid}
            loading={loading}
            handlePrev={() => router.push('/project/supplier', '/project/supplier')}
          >
            <div className="container flex flex-col items-center flex-1 mx-auto mt-16">
              <div className="w-5/6 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <div>
                    <h3 className="text-lg font-bold uppercase">
                      <FormattedMessage id="sizeAssistant.cabinetWidth" />
                    </h3>
                    <p className="text-gray-500">
                      <FormattedMessage id="sizeAssistant.cabinetWidthDescription" />
                    </p>
                  </div>
                  <div className="flex items-center px-10 py-8 mt-4 bg-white rounded-sm shadow-lg">
                    <FakerTextInput
                      unit={unit}
                      name="width"
                      type="number"
                      placeholder={unit === 'mm' ? 'eg. 1000' : 'eg. 39 1/2'}
                    />
                    <p className="ml-8 text-lg font-bold">{unit}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="text-lg font-bold uppercase">
                      <FormattedMessage id="sizeAssistant.boardThickness" />
                    </h3>
                    <p className="text-gray-500">
                      <FormattedMessage id="sizeAssistant.boardThicknessDescription" />s
                    </p>
                  </div>
                  <div className="flex items-center px-10 py-8 mt-4 bg-white rounded-sm shadow-lg">
                    <Select
                      name="gable"
                      classNameContainer="w-full"
                      className="w-full px-3 py-2 bg-gray-200 border rounded-sm h-14 focus:border-2 focus:border-mui-primary"
                    >
                      {gable.map((gab) => (
                        <option key={`gable-${gab.value}`} value={gab.value as string}>
                          {gab.display}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </ProjectCreationTemplate>
        </Form>
      )}
    </Formik>
  );
};

export default SizeAssistantTemplate;
