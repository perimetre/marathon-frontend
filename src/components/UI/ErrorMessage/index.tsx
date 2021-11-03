import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '../Button';

type ErrorMessageProps = {
  errorMessage?: string | React.ReactNode;
  handleTryAgain?: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage, handleTryAgain }) => (
  <div className="flex flex-col items-center justify-center h-full p-2">
    <p className="text-xl font-bold text-center text-red-500">{errorMessage}</p>

    {handleTryAgain && (
      <Button className="mt-4" onClick={handleTryAgain}>
        <FormattedMessage id="common.tryAgain" />
      </Button>
    )}
  </div>
);

export default ErrorMessage;
