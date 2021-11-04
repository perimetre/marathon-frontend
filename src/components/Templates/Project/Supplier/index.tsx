import { Form, Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { GetSlideSupplierByCollectionQuery } from '../../../../apollo/generated/graphql';
import { Select } from '../../../UI/Form/Select';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import ProjectCreationTemplate from '../../ProjectCreation';
import Skeleton from '../../../UI/Skeleton';
import ErrorMessage from '../../../UI/ErrorMessage';
import SkeletonImage from '../../../UI/SkeletonImage';
import classNames from 'classnames';

export type SupplierTemplateProps = {
  data?: GetSlideSupplierByCollectionQuery;
  onSubmit: (form: { slide: number | null; depth: string; model: string }) => void;
  initialValue: { slide?: number; depth?: string; model?: string };

  loading?: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const SupplierTemplate: React.FC<SupplierTemplateProps> = ({
  data,
  loading,
  error,
  handleTryAgain,
  onSubmit,
  initialValue
}) => {
  const [slide, setSlide] = useState(0);
  const [model, setModel] = useState(0);

  const router = useRouter();

  const intl = useIntl();

  const models = useMemo(() => {
    if (data && slide) {
      const supplier = data.slideSuppliers.find((f) => f.id === slide);
      return supplier?.slides;
    }
    return [];
  }, [data, slide]);

  const depths = useMemo(() => {
    if (data && slide && model) {
      const supplier = data.slideSuppliers.find((f) => f.id === slide);
      const supSlide = supplier?.slides.find((f) => f.id === model);
      return supSlide?.depths;
    }
    return [];
  }, [model, slide, data]);

  const schema = useMemo(
    () =>
      yup.object().shape({
        slide: yup.number().label('Supplier').required(),
        model: yup.string().label('Model').required(),
        depth: yup.string().label('Depth').required()
      }),
    []
  );

  useEffect(() => {
    if (data && initialValue.slide && initialValue.model) {
      setSlide(Number(initialValue.slide));
      setModel(Number(initialValue.model));
    }
  }, [data, initialValue]);

  return (
    <Formik
      initialValues={{
        slide: initialValue?.slide || null,
        depth: initialValue?.depth || '',
        model: initialValue?.model || ''
      }}
      onSubmit={onSubmit}
      validationSchema={schema}
      validateOnMount
    >
      {({ values, setFieldValue, isValid }) => (
        <Form>
          <ProjectCreationTemplate
            step={4}
            title={intl.formatMessage({ id: 'project.supplierTitle' })}
            disableNext={!isValid}
            handlePrev={() => router.push('/project/finish', '/project/finish')}
          >
            {error && (
              <div className="container flex items-center justify-center mx-auto mt-8">
                <ErrorMessage error={`serverErrors.${error}`} handleTryAgain={handleTryAgain} />
              </div>
            )}
            <div className="container flex mx-auto mt-16 mb-16">
              {loading ? (
                <div className="flex flex-col flex-1 py-6 pr-6 border-r border-gray-300 gap-6">
                  <Skeleton className="w-full h-24" />
                  <Skeleton className="w-full h-24" />
                  <Skeleton className="w-full h-24" />
                  <Skeleton className="w-full h-24" />
                </div>
              ) : (
                <div className="flex flex-col flex-1 py-6 pr-6 border-r border-gray-300 gap-6">
                  {data?.slideSuppliers.map((slide) => {
                    const active = values.slide === slide.id;
                    return (
                      <div
                        key={`type-card-${slide.id}`}
                        className={classNames(
                          'flex bg-white rounded-md shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg',
                          active && 'border-2 border-mui-primary'
                        )}
                        role="button"
                        aria-hidden="true"
                        onClick={() => {
                          setFieldValue('model', '');
                          setFieldValue('depth', '');
                          setFieldValue('slide', slide.id);
                          setSlide(slide.id);
                        }}
                      >
                        <div className="flex items-center justify-center w-64 h-full bg-mui-gray-300">
                          {slide.thumbnailUrl && (
                            <SkeletonImage
                              className="object-contain"
                              width={140}
                              height={58}
                              src={slide.thumbnailUrl}
                              alt={slide.name}
                            />
                          )}
                        </div>
                        <div className="flex items-center p-14">
                          <h2 className="text-xl font-bold uppercase">{slide.name}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {loading ? (
                <div className="flex flex-col flex-1 pt-6 pl-6 lg:pl-16 gap-6">
                  <Skeleton className="h-16 w-96" />
                  <Skeleton className="h-16 w-96" />
                </div>
              ) : (
                <div className="flex flex-col flex-1 pt-6 pl-6 lg:pl-16 gap-6">
                  <label className="block w-full max-w-xl text-left">
                    <Select
                      name="model"
                      label="Model"
                      onChange={(e) => {
                        setFieldValue('depth', '');
                        setModel(Number(e.target.value));
                      }}
                    >
                      <option key="">Select Option</option>
                      {models?.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.product}
                        </option>
                      ))}
                    </Select>
                  </label>
                  <label className="block w-full max-w-xl text-left">
                    <Select name="depth" label="Depth">
                      <option key="">Select Option</option>
                      {depths?.map((depth) => (
                        <option key={depth.id} value={depth.id}>
                          {depth.display}
                        </option>
                      ))}
                    </Select>
                  </label>
                </div>
              )}
            </div>
          </ProjectCreationTemplate>
        </Form>
      )}
    </Formik>
  );
};

export default SupplierTemplate;
