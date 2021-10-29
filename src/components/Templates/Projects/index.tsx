import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { Button } from '../../UI/Button';
import { ChevronDownIcon, CogIcon, PlusCircleSolid } from '../../UI/Icons';
import { Expander } from '../../UI/Expander';
import classNames from 'classnames';

export const ProjectsTemplate: React.FC = () => {
  const [expanded, setExpanded] = useState<string | undefined>(undefined);
  return (
    <div className="min-h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-end bg-mui-dark">
        <div className="w-full h-64 bg-white" />
        <div className="max-w-3xl px-10 py-16 lg:px-16">
          <h2 className="text-base uppercase">
            <FormattedMessage id="title" />
          </h2>
          <h1 className="my-12 text-6xl font-bold text-white">
            <FormattedMessage id="projects.title" />
          </h1>
          <p className="text-lg text-white">
            <FormattedMessage id="projects.description" />
          </p>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-w-3xl px-10 py-16 lg:px-16">
          <div className="w-full h-11 grid grid-cols-2">
            <div className="text-center border-b-8 grid border-mui-primary">
              <h2 className="text-lg font-medium">
                <FormattedMessage id="projects.activeProjects" />
              </h2>
            </div>
            <div className="grid" />
          </div>
          <div className="mt-16 mb-12">
            <div>
              <button className="flex w-full mb-2 text-left" onClick={() => setExpanded(expanded ? undefined : '1')}>
                <h3 className="flex items-center flex-1 text-xl font-bold uppercase gap-2">
                  <FormattedMessage id="projects.kitchen" />
                  <CogIcon className="text-gray-400 hover:text-mui-primary" />
                </h3>
                <ChevronDownIcon
                  className={classNames('text-mui-primary transition-all', expanded === '1' && 'rotate-180')}
                />
              </button>
              <Expander isExpanded={expanded === '1'}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center mt-5 gap-6">
                    <h3 className="flex items-center flex-1 text-lg font-semibold gap-2">Top drawer next to sink</h3>
                    <CogIcon className="text-gray-400 hover:text-mui-primary" />
                    <Button>
                      <FormattedMessage id="projects.editButton" />
                    </Button>
                  </div>
                ))}
              </Expander>
            </div>
          </div>
          <Link href="/project/type" passHref>
            <Button>
              <PlusCircleSolid />
              <FormattedMessage id="projects.addProject" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
