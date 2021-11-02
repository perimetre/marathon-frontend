import { FormattedMessage, useIntl } from 'react-intl';
import { Unit } from '../../../../types/unit';
import { TextInput } from '../../../UI/Form/TextInput';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import ProjectCreationTemplate from '../../ProjectCreation';

export type SizeAssistantTemplateProps = {
  unit: Unit;
  loading?: boolean;
  onSubmit: (form: { gable: number; width: number }) => void;
  initialValue: { gable?: number; width?: number };
};

const SizeAssistantTemplate: React.FC<SizeAssistantTemplateProps> = ({ unit, loading, onSubmit, initialValue }) => {
  const router = useRouter();

  const intl = useIntl();

  const schema = useMemo(
    () =>
      yup.object().shape({
        gable: yup.number().min(1).label('Thickness').required(),
        width: yup.number().min(1).label('Weight').required()
      }),
    []
  );

  return (
    <Formik
      initialValues={{
        gable: initialValue?.gable || 0,
        width: initialValue?.width || 0
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
            <div className="flex flex-col items-center flex-1 mt-16">
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
                    <TextInput name="width" type="number" placeholder={unit === 'mm' ? 'eg. 1000' : 'eg. 39 1/2'} />
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
                    <TextInput name="gable" type="number" placeholder={unit === 'mm' ? 'eg. 10' : 'eg. 0 1/4'} />
                    <p className="ml-8 text-lg font-bold">{unit}</p>
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
