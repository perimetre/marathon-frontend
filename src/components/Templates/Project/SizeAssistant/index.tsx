import { FormattedMessage, useIntl } from 'react-intl';
import { Unit } from '../../../../types/unit';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import ProjectCreationTemplate from '../../ProjectCreation';
import { Select } from '../../../UI/Form/Select';
import UnitTextInput from '../../../UI/UnitTextInput';

export type SizeAssistantTemplateProps = {
  unit: Unit;
  gable: { display: string; value: string | number | null }[];
  loading?: boolean;
  onSubmit: (form: { gable: string; width?: string }) => void;
  initialValue: { gable?: string; width?: string };
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
        gable: yup.string().label('Gable').required(),
        width: yup.string().label('Width').required()
      }),
    []
  );

  return (
    <Formik
      initialValues={{
        gable: initialValue?.gable || '',
        width: initialValue?.width || undefined
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
                  <div className="flex items-center px-10 py-8 mt-4 bg-white shadow-lg rounded-md">
                    <UnitTextInput unit={unit} name="width" placeholder={unit === 'mm' ? 'eg. 1000' : 'eg. 39 1/2'} />
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
                  <div className="flex items-center px-10 py-8 mt-4 bg-white shadow-lg rounded-md">
                    <Select
                      name="gable"
                      classNameContainer="w-full"
                      className="w-full px-3 py-2 font-normal bg-gray-100 border-0 rounded-sm h-14 focus:ring-1 focus:ring-mui-primary"
                    >
                      <option value="">Select...</option>
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
