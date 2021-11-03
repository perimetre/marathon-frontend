import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Button } from '../Button';

export type ErrorMessageProps = {
  className?: string;
  error?: string;
  handleTryAgain: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, className, handleTryAgain }) => {
  return (
    <div className={classNames('inline-block py-4 px-8 text-white bg-red-400 rounded-md', className)}>
      {error && <FormattedMessage id={error} />}
      {handleTryAgain && (
        <Button className="mt-4 text-white bg-red-500" onClick={handleTryAgain}>
          Try again
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;
