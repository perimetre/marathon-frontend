import { Form, Formik } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
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
import Head from 'next/head';

export type SupplierTemplateProps = {
  data?: GetSlideSupplierByCollectionQuery;
  onSubmit: (form: { supplier: number | null; depth: string; slide: string }) => void;
  initialValue: { supplier?: number; depth?: string; slide?: string };

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
  const [supplier, setSupplier] = useState(0);
  const [slide, setSlide] = useState(0);

  const router = useRouter();

  const intl = useIntl();

  const slides = useMemo(() => {
    if (data && supplier) {
      const foundSupplier = data.slideSuppliers.find((f) => f.id === supplier);
      return foundSupplier?.slides;
    }
    return [];
  }, [data, supplier]);

  const depths = useMemo(() => {
    if (data && supplier && slide) {
      const foundSupplier = data.slideSuppliers.find((f) => f.id === supplier);
      const supSlide = foundSupplier?.slides.find((f) => f.id === slide);
      return supSlide?.depths;
    }
    return [];
  }, [slide, supplier, data]);

  const schema = useMemo(
    () =>
      yup.object().shape({
        supplier: yup
          .number()
          .label(intl.formatMessage({ id: 'project.supplier' }))
          .required(),
        slide: yup
          .string()
          .label(intl.formatMessage({ id: 'project.slide' }))
          .required(),
        depth: yup
          .string()
          .label(intl.formatMessage({ id: 'project.depth' }))
          .required()
      }),
    [intl]
  );

  useEffect(() => {
    if (data && initialValue.supplier && initialValue.slide) {
      setSupplier(Number(initialValue.supplier));
      setSlide(Number(initialValue.slide));
    }
  }, [data, initialValue]);

  return (
    <>
      <Head>
        <title>
          {`${intl.formatMessage({ id: 'project.supplierTitle' })} | ${intl.formatMessage({
            id: 'title'
          })}`}
        </title>
      </Head>
      <Formik
        initialValues={{
          supplier: initialValue?.supplier || null,
          depth: initialValue?.depth || '',
          slide: initialValue?.slide || ''
        }}
        onSubmit={onSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ values, setFieldValue, isValid }) => (
          <Form>
            <ProjectCreationTemplate
              step={4}
              title={intl.formatMessage({ id: 'project.supplierHeader' })}
              disableNext={!isValid}
              handlePrev={() => router.push('/project/finish', '/project/finish')}
            >
              {error && (
                <div className="container flex items-center justify-center mx-auto mt-8">
                  <ErrorMessage error={error} handleTryAgain={handleTryAgain} />
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
                    {data?.slideSuppliers.map((supplier) => {
                      const active = values.supplier === supplier.id;
                      return (
                        <div
                          key={`type-card-${supplier.id}`}
                          className={classNames(
                            'flex bg-white rounded-md shadow-sm border-2 transition-all hover:-translate-y-1 hover:shadow-lg duration-75',
                            active && 'border-mui-primary'
                          )}
                          role="button"
                          aria-hidden="true"
                          onClick={() => {
                            setFieldValue('slide', '');
                            setFieldValue('depth', '');
                            setFieldValue('supplier', supplier.id);
                            setSupplier(supplier.id);
                          }}
                        >
                          <div className="flex items-center justify-center w-64 h-full bg-mui-gray-300">
                            {supplier.thumbnailUrl && (
                              <SkeletonImage
                                key={supplier.name}
                                className="object-contain"
                                width={140}
                                height={58}
                                src={supplier.thumbnailUrl}
                                alt={supplier.name}
                              />
                            )}
                          </div>
                          <div className="flex items-center p-14">
                            <h2 className="text-xl font-bold uppercase">{supplier.name}</h2>
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
                        name="slide"
                        label="Model"
                        onChange={(e) => {
                          setFieldValue('depth', '');
                          setSlide(Number(e.target.value));
                        }}
                      >
                        <option key="">Select Option</option>
                        {slides?.map((slide) => (
                          <option key={slide.id} value={slide.id}>
                            {slide.product}
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
    </>
  );
};

export default SupplierTemplate;
