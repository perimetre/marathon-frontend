import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../../UI/Button';
import { Expander } from '../../UI/Expander';
import { ChevronDownIcon } from '../../UI/Icons';
import classNames from 'classnames';

export const HomeTemplate: React.FC = () => {
  const [expanded, setExpanded] = useState('1');
  return (
    <div className="min-h-full grid grid-cols-1 lg:grid-cols-2">
      <div className="max-w-3xl p-10 lg:p-16">
        <h2 className="text-base uppercase">
          <FormattedMessage id="title" />
        </h2>
        <h1 className="mt-4 text-6xl font-bold">
          <FormattedMessage id="home.title" />
        </h1>
        <div className="mt-8">
          <div className="py-8 border-b border-gray-300">
            <button className="flex w-full text-left" onClick={() => setExpanded('1')}>
              <h3 className="flex-1 font-bold uppercase">
                <FormattedMessage id="home.accordion.choosePortfolio" />
              </h3>
              <ChevronDownIcon
                className={classNames('text-mui-primary transition-all', expanded === '1' && 'rotate-180')}
              />
            </button>
            <Expander isExpanded={expanded === '1'}>
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
            <button className="flex w-full text-left" onClick={() => setExpanded('2')}>
              <h3 className="flex-1 font-bold uppercase">
                <FormattedMessage id="home.accordion.firstProject" />
              </h3>
              <ChevronDownIcon
                className={classNames('text-mui-primary transition-all', expanded === '2' && 'rotate-180')}
              />
            </button>
            <Expander isExpanded={expanded === '2'}>
              <p className="py-4">
                <FormattedMessage id="home.accordion.projectDescription" />
              </p>
            </Expander>
          </div>
          <div className="py-8">
            <button className="flex w-full text-left" onClick={() => setExpanded('3')}>
              <h3 className="flex-1 font-bold uppercase">
                <FormattedMessage id="home.accordion.pickWhereLeft" />
              </h3>
              <ChevronDownIcon
                className={classNames('text-mui-primary transition-all', expanded === '3' && 'rotate-180')}
              />
            </button>
            <Expander isExpanded={expanded === '3'}>
              <p className="py-4">
                <FormattedMessage id="home.accordion.leftDescription" values={{ message: <strong>Sign in</strong> }} />
              </p>
            </Expander>
          </div>
        </div>
      </div>
      <div className="bg-mui-dark grid" />
    </div>
  );
};
