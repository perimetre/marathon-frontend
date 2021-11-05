import { Form, Formik } from 'formik';
import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { GetTypeQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import * as yup from 'yup';
import ProjectCreationTemplate from '../../ProjectCreation';
import ErrorMessage from '../../../UI/ErrorMessage';
import Skeleton from '../../../UI/Skeleton';
import Head from 'next/head';

export type TypeTemplateProps = {
  data?: GetTypeQuery;
  initialValue?: { type?: number };
  onSubmit: (form: { type: number | null }) => void;

  loading?: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const TypeTemplate: React.FC<TypeTemplateProps> = ({
  data,
  loading,
  error,
  initialValue,
  onSubmit,
  handleTryAgain
}) => {
  const intl = useIntl();

  const schema = useMemo(
    () =>
      yup.object().shape({
        type: yup.number().min(0).label('Type').required()
      }),
    []
  );

  return (
    <>
      <Head>
        <title>
          {`${intl.formatMessage({ id: 'project.typeTitle' })} | ${intl.formatMessage({
            id: 'title'
          })}`}
        </title>
      </Head>
      <Formik
        initialValues={{ type: initialValue?.type || null }}
        onSubmit={onSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ values, isValid, setFieldValue }) => (
          <Form>
            <ProjectCreationTemplate
              step={1}
              title={intl.formatMessage({ id: 'project.typeHeader' })}
              disablePrev
              disableNext={!isValid}
            >
              {error && (
                <div className="container flex items-center justify-center mx-auto mt-8">
                  <ErrorMessage error={`serverErrors.${error}`} handleTryAgain={handleTryAgain} />
                </div>
              )}
              {loading ? (
                <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
                  <Skeleton className="h-96 w-96" />
                  <Skeleton className="h-96 w-96" />
                  <Skeleton className="h-96 w-96" />
                </div>
              ) : (
                <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
                  {data?.types.map((type) => (
                    <Card
                      key={`type-card-${type.id}`}
                      active={values.type === type.id}
                      imageClassName="object-cover object-center"
                      onClick={() => setFieldValue('type', type.id)}
                      image={type.thumbnailUrl || ''}
                      title={type.name}
                      description={type.description}
                    />
                  ))}
                </div>
              )}
            </ProjectCreationTemplate>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TypeTemplate;
