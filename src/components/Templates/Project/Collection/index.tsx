import { Form, Formik } from 'formik';
import { GetCollectionsQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import { ChevronRight } from '../../../UI/Icons/chevronRight';
import * as yup from 'yup';
import { useIntl } from 'react-intl';
import { useMemo } from 'react';
import ProjectCreationTemplate from '../../ProjectCreation';
import { useRouter } from 'next/router';
import ErrorMessage from '../../../UI/ErrorMessage';
import Skeleton from '../../../UI/Skeleton';

export type CollectionTemplateProps = {
  data?: GetCollectionsQuery;
  onSubmit: (form: { collection: number }) => void;
  initialValue: { collection?: number };

  loading?: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const CollectionTemplate: React.FC<CollectionTemplateProps> = ({
  data,
  loading,
  error,
  handleTryAgain,
  onSubmit,
  initialValue
}) => {
  const intl = useIntl();

  const router = useRouter();

  const schema = useMemo(
    () =>
      yup.object().shape({
        collection: yup.number().label('Collection').required()
      }),
    []
  );

  return (
    <Formik
      initialValues={{ collection: initialValue.collection || 0 }}
      onSubmit={onSubmit}
      validationSchema={schema}
      validateOnMount
    >
      {({ values, isValid, setFieldValue }) => (
        <Form>
          <ProjectCreationTemplate
            step={2}
            title={intl.formatMessage({ id: 'project.collectionTitle' })}
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
              <div className="container flex flex-wrap justify-center mx-auto my-16 gap-16">
                {data?.collections.map((collection) => (
                  <Card
                    key={`collection-card-${collection.id}`}
                    category={collection.subtitle}
                    active={values.collection === collection.id}
                    onClick={() => setFieldValue('collection', collection.id)}
                    image={collection.thumbnailUrl}
                    title={collection.name}
                    description={collection.description}
                    footer={
                      <p className="flex items-center text-sm font-semibold gap-1">
                        {collection.footer}
                        <ChevronRight className="w-5 h-5 text-mui-primary" />
                      </p>
                    }
                  />
                ))}
              </div>
            )}
          </ProjectCreationTemplate>
        </Form>
      )}
    </Formik>
  );
};

export default CollectionTemplate;
