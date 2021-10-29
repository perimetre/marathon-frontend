import { useMemo } from 'react';
import { GetSlideSupplierQuery } from '../../../../apollo/generated/graphql';
import Card from '../../../UI/Card';

export type SupplierTemplateProps = {
  data?: GetSlideSupplierQuery;
  onSelectSupplier: (selected: { supplier?: string; model?: string; depth?: string }) => void;
  selectedSupplier?: { supplier?: string; model?: string; depth?: string } | null;
};

export const SupplierTemplate: React.FC<SupplierTemplateProps> = ({ data, selectedSupplier, onSelectSupplier }) => {
  const models = useMemo(() => {
    if (data && selectedSupplier?.supplier) {
      const supplier = data.slideSuppliers.find((f) => f.slug === selectedSupplier.supplier);
      return supplier?.slides;
    }
    return [];
  }, [data, selectedSupplier?.supplier]);

  const depths = useMemo(() => {
    if (data && selectedSupplier?.supplier && selectedSupplier?.model) {
      const supplier = data.slideSuppliers.find((f) => f.slug === selectedSupplier.supplier);
      const slide = supplier?.slides.find((f) => f.slug === selectedSupplier.model);
      return slide?.depths;
    }
    return [];
  }, [data, selectedSupplier?.supplier, selectedSupplier?.model]);

  return (
    <div className="container flex mx-auto mt-16 mb-16">
      <div className="flex flex-col flex-1 py-6 pr-6 border-r border-gray-300 gap-6">
        {data?.slideSuppliers.map((slide) => (
          <Card
            horizontal
            key={`type-card-${slide.id}`}
            active={selectedSupplier?.supplier === slide.slug}
            onClick={() => onSelectSupplier({ supplier: slide.slug })}
            image={slide.thumbnailUrl}
            title={slide.name}
          />
        ))}
      </div>
      <div className="flex flex-col flex-1 pt-6 pl-6 lg:pl-16 gap-6">
        <label className="block w-full max-w-xl text-left">
          <span className="text-gray-700 uppercase">Model</span>
          <select
            className="font-bold uppercase select form-select"
            value={selectedSupplier?.model || '-1'}
            onChange={(e) => onSelectSupplier({ ...selectedSupplier, model: e.target.value, depth: undefined })}
          >
            <option key="-1">Select Option</option>
            {models?.map((model) => (
              <option key={model.id}>{model.product}</option>
            ))}
          </select>
        </label>
        <label className="block w-full max-w-xl text-left">
          <span className="text-gray-700 uppercase">Depth</span>
          <select
            className="font-bold uppercase select form-select"
            value={selectedSupplier?.depth || '-1'}
            onChange={(e) => onSelectSupplier({ ...selectedSupplier, depth: e.target.value })}
          >
            <option key="-1">Select Option</option>
            {depths?.map((depth) => (
              <option key={depth.id}>{depth.display}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};
