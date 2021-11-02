import { Form, Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { GetSlideSupplierByCollectionQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import { Select } from '../../../UI/Form/Select';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import ProjectCreationTemplate from '../../ProjectCreation';

export type SupplierTemplateProps = {
  data?: GetSlideSupplierByCollectionQuery;
  onSubmit: (form: { slide: number; depth: number; model: number }) => void;
  initialValue: { slide?: number; depth?: number; model?: number };
};

const SupplierTemplate: React.FC<SupplierTemplateProps> = ({ data, onSubmit, initialValue }) => {
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
        slide: initialValue?.slide || 0,
        depth: initialValue?.depth || 0,
        model: initialValue?.model || 0
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
            <div className="container flex mx-auto mt-16 mb-16">
              <div className="flex flex-col flex-1 py-6 pr-6 border-r border-gray-300 gap-6">
                {data?.slideSuppliers.map((slide) => (
                  <Card
                    horizontal
                    key={`type-card-${slide.id}`}
                    active={values.slide === slide.id}
                    onClick={() => {
                      setFieldValue('model', '');
                      setFieldValue('depth', '');
                      setFieldValue('slide', slide.id);
                      setSlide(slide.id);
                    }}
                    image={slide.thumbnailUrl}
                    title={slide.name}
                  />
                ))}
              </div>
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
                    <option key="-1">Select Option</option>
                    {models?.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.product}
                      </option>
                    ))}
                  </Select>
                </label>
                <label className="block w-full max-w-xl text-left">
                  <Select name="depth" label="Depth">
                    <option key="-1">Select Option</option>
                    {depths?.map((depth) => (
                      <option key={depth.id} value={depth.id}>
                        {depth.display}
                      </option>
                    ))}
                  </Select>
                </label>
              </div>
            </div>
          </ProjectCreationTemplate>
        </Form>
      )}
    </Formik>
  );
};

export default SupplierTemplate;
