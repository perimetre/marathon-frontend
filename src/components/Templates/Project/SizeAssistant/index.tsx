import { FormattedMessage } from 'react-intl';
import { Unit } from '../../../../types/unit';
import { TextInput } from '../../../UI/Form/TextInput';

export type SizeAssistantTemplateProps = {
  unit: Unit;
};

export const SizeAssistantTemplate: React.FC<SizeAssistantTemplateProps> = ({ unit }) => {
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
            <TextInput name="weight" type="number" placeholder={unit === 'mm' ? 'eg. 1000' : 'eg. 39 1/2'} />
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
            <TextInput name="thickness" type="number" placeholder={unit === 'mm' ? 'eg. 10' : 'eg. 0 1/4'} />
            <p className="ml-8 text-lg font-bold">{unit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
