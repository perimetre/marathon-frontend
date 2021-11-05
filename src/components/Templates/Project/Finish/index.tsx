import { Form, Formik } from 'formik';
import { GetFinishByCollectionQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import ProjectCreationTemplate from '../../ProjectCreation';
import * as yup from 'yup';
import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import Skeleton from '../../../UI/Skeleton';
import ErrorMessage from '../../../UI/ErrorMessage';
import Head from 'next/head';

export type FinishTemplateProps = {
  data?: GetFinishByCollectionQuery;
  onSubmit: (form: { finish: number | null }) => void;
  initialValue: { finish?: number };

  loading?: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const FinishTemplate: React.FC<FinishTemplateProps> = ({
  data,
  error,
  loading,
  handleTryAgain,
  onSubmit,
  initialValue
}) => {
  const router = useRouter();

  const intl = useIntl();

  const schema = useMemo(
    () =>
      yup.object().shape({
        finish: yup.number().label('Finish').required()
      }),
    []
  );

  return (
    <>
      <Head>
        <title>
          {`${intl.formatMessage({ id: 'project.finishTitle' })} | ${intl.formatMessage({
            id: 'title'
          })}`}
        </title>
      </Head>
      <Formik
        initialValues={{ finish: initialValue.finish || null }}
        onSubmit={onSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ values, isValid, setFieldValue }) => (
          <Form>
            <ProjectCreationTemplate
              step={3}
              title={intl.formatMessage({ id: 'project.finishHeader' })}
              disableNext={!isValid}
              handlePrev={() => router.push('/project/collection', '/project/collection')}
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
                  {data?.finishes.map((finish) => (
                    <Card
                      key={`finish-card-${finish.id}`}
                      active={values.finish === finish.id}
                      imageClassName="object-cover object-center"
                      onClick={() => setFieldValue('finish', finish.id)}
                      image={finish.thumbnailUrl}
                      title={finish.name}
                      description={finish.description}
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

export default FinishTemplate;
