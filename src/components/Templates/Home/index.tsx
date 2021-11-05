import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Button from '../../UI/Button';
import Expander from '../../UI/Expander';
import classNames from 'classnames';
import { ChevronDownIcon } from '../../UI/Icons/chevronDown';
import AppLayout from '../../Layouts/AppLayout';
import { UserIcon } from '../../UI/Icons/user';
import { useRouter } from 'next/router';

const HomeTemplate: React.FC = () => {
  const [expanded, setExpanded] = useState<string[]>(['ac-portfolio']);

  const router = useRouter();

  const handleAccordion = useCallback(
    (name: string) => {
      setExpanded(expanded.includes(name) ? expanded.filter((f) => f !== name) : [...expanded, name]);
    },
    [expanded]
  );

  return (
    <AppLayout
      appendRight={() => (
        <button className="flex pr-4 font-semibold gap-2" onClick={() => router.push('/login', '/login')}>
          <UserIcon className="text-mui-primary" />
          <FormattedMessage id="login.signinButton" />
        </button>
      )}
    >
      <div className="min-h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-end">
          <div className="max-w-3xl p-10 lg:p-16 ">
            <h2 className="text-base uppercase">
              <FormattedMessage id="title" />
            </h2>
            <h1 className="mt-4 text-6xl font-bold">
              <FormattedMessage id="home.title" />
            </h1>
            <div className="mt-8">
              <div className="py-8 border-b border-gray-300">
                <button className="flex w-full text-left" onClick={() => handleAccordion('ac-portfolio')}>
                  <h3 className="flex-1 font-bold uppercase">
                    <FormattedMessage id="home.accordion.choosePortfolio" />
                  </h3>
                  <ChevronDownIcon
                    className={classNames(
                      'text-mui-primary transition-all',
                      expanded.includes('ac-portfolio') && 'rotate-180'
                    )}
                  />
                </button>
                <Expander isExpanded={expanded.includes('ac-portfolio')}>
                  <p className="py-4">
                    <FormattedMessage id="home.accordion.portfolioDescription" />
                  </p>
                  <Link href="/login" passHref>
                    <Button variant="default">
                      <FormattedMessage id="home.accordion.startNow" />
                    </Button>
                  </Link>
                </Expander>
              </div>
              <div className="py-8 border-b border-gray-300">
                <button className="flex w-full text-left" onClick={() => handleAccordion('ac-project')}>
                  <h3 className="flex-1 font-bold uppercase">
                    <FormattedMessage id="home.accordion.firstProject" />
                  </h3>
                  <ChevronDownIcon
                    className={classNames(
                      'text-mui-primary transition-all',
                      expanded.includes('ac-project') && 'rotate-180'
                    )}
                  />
                </button>
                <Expander isExpanded={expanded.includes('ac-project')}>
                  <p className="py-4">
                    <FormattedMessage id="home.accordion.projectDescription" />
                  </p>
                </Expander>
              </div>
              <div className="py-8">
                <button className="flex w-full text-left" onClick={() => handleAccordion('ac-pick')}>
                  <h3 className="flex-1 font-bold uppercase">
                    <FormattedMessage id="home.accordion.pickWhereLeft" />
                  </h3>
                  <ChevronDownIcon
                    className={classNames(
                      'text-mui-primary transition-all',
                      expanded.includes('ac-pick') && 'rotate-180'
                    )}
                  />
                </button>
                <Expander isExpanded={expanded.includes('ac-pick')}>
                  <p className="py-4">
                    <FormattedMessage
                      id="home.accordion.leftDescription"
                      values={{ message: <strong>Sign in</strong> }}
                    />
                  </p>
                </Expander>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-mui-dark grid" />
      </div>
    </AppLayout>
  );
};

export default HomeTemplate;
