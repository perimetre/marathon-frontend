import { useField, useFormikContext } from 'formik';
import { useMemo } from 'react';
import { GetSlideSupplierByCollectionQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';
import { Select } from '../../../UI/Form/Select';

export type SupplierTemplateProps = {
  data?: GetSlideSupplierByCollectionQuery;
};

const SupplierTemplate: React.FC<SupplierTemplateProps> = ({ data }) => {
  const [supField, , supHelpers] = useField({ name: 'slide' });

  const { values, setFieldValue } = useFormikContext<{ slide: number; model: number; depth: number }>();

  const models = useMemo(() => {
    if (data && supField.value) {
      const supplier = data.slideSuppliers.find((f) => f.id === supField.value);
      return supplier?.slides;
    }
    return [];
  }, [data, supField.value]);

  const depths = useMemo(() => {
    if (data && values?.slide && values?.model) {
      const supplier = data.slideSuppliers.find((f) => f.id === Number(values.slide));
      const slide = supplier?.slides.find((f) => f.id === Number(values.model));
      return slide?.depths;
    }
    return [];
  }, [values, data]);

  return (
    <div className="container flex mx-auto mt-16 mb-16">
      <div className="flex flex-col flex-1 py-6 pr-6 border-r border-gray-300 gap-6">
        {data?.slideSuppliers.map((slide) => (
          <Card
            horizontal
            key={`type-card-${slide.id}`}
            active={supField.value === slide.id}
            onClick={() => {
              setFieldValue('model', '');
              setFieldValue('depth', '');
              supHelpers.setValue(slide.id);
            }}
            image={slide.thumbnailUrl}
            title={slide.name}
          />
        ))}
      </div>
      <div className="flex flex-col flex-1 pt-6 pl-6 lg:pl-16 gap-6">
        <label className="block w-full max-w-xl text-left">
          <Select name="model" label="Model" onChange={() => setFieldValue('depth', '')}>
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
  );
};

export default SupplierTemplate;
