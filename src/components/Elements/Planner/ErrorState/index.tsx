import React from 'react';
import { useUnityPlayerContext } from '../../../Providers/UnityPlayerProvider';
import { FormattedMessage, useIntl } from 'react-intl';
import { CenterContent } from '../../../Templates/Project/Planner/styles';
import Button from '../../../UI/Button';
import Link from 'next/link';
import { PlannerProps } from '../index';

type ErrorStateProps = Pick<PlannerProps, 'slug' | 'error' | 'handleTryAgain'>;

const ErrorState: React.FC<ErrorStateProps> = ({ error, handleTryAgain, slug }) => {
  const { errorMessage } = useUnityPlayerContext();

  const intl = useIntl();

  return (
    <CenterContent>
      <p className="text-2xl text-center">
        <FormattedMessage
          id="build.error"
          values={{
            appTitle: intl.formatMessage({ id: 'title' }),
            errorMessage: error || errorMessage,
            error: (msg: string) => <p className="mt-2 text-xl font-bold text-red-500">{msg}</p>
          }}
        />
      </p>

      {error && (
        <Button className="mt-4" onClick={handleTryAgain}>
          <FormattedMessage id="common.tryAgain" />
        </Button>
      )}

      {errorMessage && (
        <Link
          href={{
            pathname: '/project/[slug]/planner',
            query: { slug }
          }}
          // disable prefetch to hard refresh
          prefetch={false}
        >
          <a>
            <Button className="mt-4">
              <FormattedMessage id="common.tryAgain" />
            </Button>
          </a>
        </Link>
      )}
    </CenterContent>
  );
};

export default ErrorState;
