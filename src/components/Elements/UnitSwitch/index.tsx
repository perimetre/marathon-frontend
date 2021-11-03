import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { useProjectCreationContext } from '../../Providers/ProjectCreationProvider';

const UnitSwitch: React.FC = () => {
  const { unit, setUnit } = useProjectCreationContext();

  return (
    <div className="flex items-center mr-16 cursor-pointer">
      <div
        className={classNames(
          'font-semibold uppercase transition-colors',
          unit === 'mm' ? 'text-mui-primary' : 'text-gray-700 '
        )}
      >
        <FormattedMessage id="unit.millimeter" />
      </div>
      <button className="relative mx-4" onClick={() => setUnit(unit === 'mm' ? 'in' : 'mm')}>
        <div className="block h-8 bg-gray-200 rounded-full w-14" />
        <div
          className={classNames(
            'absolute left-1 top-1 bg-mui-primary w-6 h-6 rounded-full transition transform',
            unit === 'in' && 'translate-x-full'
          )}
        />
      </button>
      <div
        className={classNames(
          'font-semibold uppercase transition-colors',
          unit === 'in' ? 'text-mui-primary' : 'text-gray-700'
        )}
      >
        <FormattedMessage id="unit.inches" />
      </div>
    </div>
  );
};

export default UnitSwitch;
