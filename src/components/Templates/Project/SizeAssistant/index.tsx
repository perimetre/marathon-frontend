import { FormattedMessage } from 'react-intl';
import { Unit } from '../../../../types/unit';

export type SizeAssistantTemplateProps = {
  unit: Unit;
  thickness?: string;
  weight?: string;
  onChangeThickness: (thickness: string) => void;
  onChangeWeight: (weight: string) => void;
};

export const SizeAssistantTemplate: React.FC<SizeAssistantTemplateProps> = ({
  unit,
  thickness,
  weight,
  onChangeWeight,
  onChangeThickness
}) => {
  return (
    <div className="flex flex-col items-center flex-1 mt-16">
      <div className="w-5/6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <div>
            <h3 className="text-lg font-bold uppercase">
              <FormattedMessage id="sizeAssistant.cabinetWidth" />
            </h3>
            <p className="text-gray-500">
              <FormattedMessage id="sizeAssistant.cabinetWidthDescription" />
            </p>
          </div>
          <div className="flex items-center px-10 py-8 mt-4 bg-white rounded-sm shadow-lg">
            <input
              className="flex-1 px-3 py-2 bg-gray-200 rounded-sm h-14 form-input"
              type="number"
              value={weight}
              onChange={(e) => onChangeWeight(e.target.value)}
              placeholder={unit === 'mm' ? 'eg. 1000' : 'eg. 39 1/2'}
            />
            <p className="ml-8 text-lg font-bold">{unit}</p>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-lg font-bold uppercase">
              <FormattedMessage id="sizeAssistant.boardThickness" />
            </h3>
            <p className="text-gray-500">
              <FormattedMessage id="sizeAssistant.boardThicknessDescription" />s
            </p>
          </div>
          <div className="flex items-center px-10 py-8 mt-4 bg-white rounded-sm shadow-lg">
            <input
              className="flex-1 px-3 py-2 bg-gray-200 rounded-sm h-14 form-input"
              type="number"
              value={thickness}
              onChange={(e) => onChangeThickness(e.target.value)}
              placeholder={unit === 'mm' ? 'eg. 10' : 'eg. 0 1/4'}
            />
            <p className="ml-8 text-lg font-bold">{unit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
