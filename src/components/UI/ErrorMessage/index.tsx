import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '../Button';

type ErrorMessageProps = {
  error?: string | React.ReactNode;
  handleTryAgain?: () => void;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, handleTryAgain }) => (
  <div className="flex flex-col items-center justify-center h-full p-8 border border-red-200 rounded-md">
    <p className="text-xl font-bold text-center text-red-500">
      {typeof error === 'string' ? <FormattedMessage id={error} /> : error}
    </p>
    {handleTryAgain && (
      <Button className="mt-4" onClick={handleTryAgain}>
        <FormattedMessage id="common.tryAgain" />
      </Button>
    )}
  </div>
);

export default ErrorMessage;
