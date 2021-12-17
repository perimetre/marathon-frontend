import { Form, Formik } from 'formik';
import { GetCollectionsQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import * as yup from 'yup';
import { FormattedMessage, useIntl } from 'react-intl';
import React, { useMemo, useState } from 'react';
import ProjectCreationTemplate from '../../ProjectCreation';
import { useRouter } from 'next/router';
import ErrorMessage from '../../../UI/ErrorMessage';
import Skeleton from '../../../UI/Skeleton';
import Switch from '../../../UI/Form/Switch';
import Head from 'next/head';
import { ChevronRight } from 'react-feather';

export type CollectionTemplateProps = {
  data?: GetCollectionsQuery;
  onSubmit: (form: { collection: number | null; hasPegs?: boolean }) => void;
  initialValue: { collection?: number; hasPegs?: boolean };

  displayPegs?: boolean;
  loading?: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const CollectionTemplate: React.FC<CollectionTemplateProps> = ({
  data,
  loading,
  displayPegs,
  error,
  handleTryAgain,
  onSubmit,
  initialValue
}) => {
  const [enablePegs, setEnablePegs] = useState(false);

  const intl = useIntl();

  const router = useRouter();

  const schema = useMemo(
    () =>
      yup.object().shape({
        collection: yup
          .number()
          .label(intl.formatMessage({ id: 'project.collection' }))
          .required(),
        hasPegs: yup.boolean().nullable()
      }),
    [intl]
  );

  return (
    <>
      <Head>
        <title>
          {`${intl.formatMessage({ id: 'project.collectionTitle' })} | ${intl.formatMessage({
            id: 'title'
          })}`}
        </title>
      </Head>
      <Formik
        initialValues={{ collection: initialValue.collection || null, hasPegs: initialValue.hasPegs }}
        onSubmit={onSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ values, isValid, setFieldValue }) => (
          <Form>
            <ProjectCreationTemplate
              step={2}
              title={intl.formatMessage({ id: 'project.collectionHeader' })}
              disableNext={!isValid}
              handlePrev={() => router.push('/project/type', '/project/type')}
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
                <div className="container mx-auto">
                  <div className="flex flex-wrap justify-center mt-16 mb-8 gap-16">
                    {data?.collections.map((collection) => (
                      <Card
                        key={`collection-card-${collection.id}`}
                        category={collection.subtitle}
                        isComingSoon={collection.isComingSoon}
                        active={values.collection === collection.id}
                        onClick={() => {
                          setFieldValue('collection', collection.id);
                          setEnablePegs(collection.hasPegs);
                          setFieldValue('hasPegs', false);
                        }}
                        image={collection.thumbnailUrl}
                        title={collection.name}
                        description={collection.description}
                        footer={
                          collection.footer && (
                            <p className="flex items-center text-sm font-semibold gap-1">
                              {collection.footer}
                              <ChevronRight className="w-5 h-5 text-mui-primary" />
                            </p>
                          )
                        }
                      />
                    ))}
                  </div>
                  {displayPegs && (
                    <div className="flex items-center justify-center mb-12">
                      <Switch name="hasPegs" disabled={!enablePegs} />
                      <FormattedMessage id="project.usePegboard" />
                    </div>
                  )}
                </div>
              )}
            </ProjectCreationTemplate>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CollectionTemplate;
