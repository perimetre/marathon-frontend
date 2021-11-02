import { Formik, Form } from 'formik';
import { GetFinishQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import ProjectCreationTemplate from '../../ProjectCreation';
import * as yup from 'yup';
import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

export type FinishTemplateProps = {
  data?: GetFinishQuery;
  onSubmit: (form: { finish: number }) => void;
  initialValue: { finish?: number };
};

const FinishTemplate: React.FC<FinishTemplateProps> = ({ data, onSubmit, initialValue }) => {
  const router = useRouter();

  const intl = useIntl();

  const schema = useMemo(
    () =>
      yup.object().shape({
        finish: yup.string().label('Finish').required()
      }),
    []
  );

  return (
    <Formik
      initialValues={{ finish: initialValue.finish || 0 }}
      onSubmit={onSubmit}
      validationSchema={schema}
      validateOnMount
    >
      {({ values, isValid, setFieldValue }) => (
        <Form>
          <ProjectCreationTemplate
            step={3}
            title={intl.formatMessage({ id: 'project.finishTitle' })}
            disableNext={!isValid}
            handlePrev={() => router.push('/project/collection', '/project/collection')}
          >
            <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
              {data?.finishes.map((finish) => (
                <Card
                  key={`finish-card-${finish.id}`}
                  active={values.finish === finish.id}
                  onClick={() => setFieldValue('finish', finish.id)}
                  image={finish.thumbnailUrl}
                  title={finish.name}
                  description={finish.description}
                />
              ))}
            </div>
          </ProjectCreationTemplate>
        </Form>
      )}
    </Formik>
  );
};

export default FinishTemplate;
