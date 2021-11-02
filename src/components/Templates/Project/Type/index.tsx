import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { GetTypeQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import * as yup from 'yup';
import ProjectCreationTemplate from '../../ProjectCreation';

export type TypeTemplateProps = {
  data?: GetTypeQuery;
  initialValue?: { type?: number };
  onSubmit: (form: { type: number }) => void;
};

const TypeTemplate: React.FC<TypeTemplateProps> = ({ data, initialValue, onSubmit }) => {
  const intl = useIntl();

  const schema = useMemo(
    () =>
      yup.object().shape({
        type: yup.number().label('Type').required()
      }),
    []
  );

  return (
    <Formik
      initialValues={{ type: initialValue?.type || 0 }}
      onSubmit={onSubmit}
      validationSchema={schema}
      validateOnMount
    >
      {({ values, isValid, setFieldValue }) => (
        <Form>
          <ProjectCreationTemplate
            step={1}
            title={intl.formatMessage({ id: 'project.typeTitle' })}
            disablePrev
            disableNext={!isValid}
          >
            <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
              {data?.types.map((type) => (
                <Card
                  key={`type-card-${type.id}`}
                  active={values.type === type.id}
                  onClick={() => setFieldValue('type', type.id)}
                  image={type.thumbnailUrl || ''}
                  title={type.name}
                  description={type.description}
                />
              ))}
            </div>
          </ProjectCreationTemplate>
        </Form>
      )}
    </Formik>
  );
};

export default TypeTemplate;
