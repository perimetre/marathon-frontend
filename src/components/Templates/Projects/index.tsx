import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Link from 'next/link';
import { Button } from '../../UI/Button';
import { Expander } from '../../UI/Expander';
import { Modal } from '../../UI/Modal';
import classNames from 'classnames';
import { Dropdown } from '../../UI/Dropdown';
import { ChevronDownIcon } from '../../UI/Icons/chevronDown';
import { CogIcon } from '../../UI/Icons/Gog';
import { PlusCircleSolid } from '../../UI/Icons/plusCircle';
import AppLayout from '../../Layouts/AppLayout';

export type ProjectsTemplateProps = {
  description?: string;
  onChange: (description: string) => void;
};

export const ProjectsTemplate: React.FC<ProjectsTemplateProps> = ({ description, onChange }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState<string[]>([]);

  const intl = useIntl();

  const handleAccordion = useCallback(
    (key: string) => {
      setExpanded(expanded?.includes(key) ? expanded.filter((f) => f !== key) : [...expanded, key]);
    },
    [expanded]
  );

  return (
    <AppLayout>
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
              <div className="pb-8 mb-10 border-b">
                <button className="flex w-full mb-2 text-left" onClick={() => handleAccordion('1')}>
                  <h3 className="flex items-center flex-1 text-xl font-bold uppercase gap-2">
                    <FormattedMessage id="projects.myProjects" />
                    <Dropdown
                      content={[
                        {
                          id: '1',
                          content: (
                            <button
                              onClick={(e) => e.stopPropagation()}
                              className="text-base font-semibold text-black capitalize leading-8"
                            >
                              Rename
                            </button>
                          )
                        }
                      ]}
                      footer={[
                        {
                          id: '2',
                          content: (
                            <button
                              onClick={(e) => e.stopPropagation()}
                              className="text-base font-semibold text-black capitalize leading-8"
                            >
                              Delete
                            </button>
                          )
                        }
                      ]}
                    >
                      <CogIcon onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-mui-primary" />
                    </Dropdown>
                  </h3>
                  <ChevronDownIcon
                    className={classNames('text-mui-primary transition-all', expanded.includes('1') && 'rotate-180')}
                  />
                </button>
                <Expander isExpanded={expanded.includes('1')}>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center mt-5 gap-6">
                      <h3 className="flex items-center flex-1 text-lg font-semibold gap-2">Top drawer next to sink</h3>
                      <CogIcon className="text-gray-400 hover:text-mui-primary" />
                      <Button>
                        <FormattedMessage id="projects.editButton" />
                      </Button>
                    </div>
                  ))}
                  <Button onClick={() => setModalOpen(true)} variant="text" className="p-0 mt-8 text-mui-primary">
                    <PlusCircleSolid />
                    <FormattedMessage id="projects.addDrawer" />
                  </Button>
                </Expander>
              </div>
              <div>
                <button className="flex w-full mb-2 text-left" onClick={() => handleAccordion('2')}>
                  <h3 className="flex items-center flex-1 text-xl font-bold uppercase gap-2">
                    <FormattedMessage id="projects.kitPortfolio" />
                    <CogIcon className="text-gray-400 hover:text-mui-primary" />
                  </h3>
                  <ChevronDownIcon
                    className={classNames('text-mui-primary transition-all', expanded.includes('2') && 'rotate-180')}
                  />
                </button>
                <Expander isExpanded={expanded.includes('2')}>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center mt-5 gap-6">
                      <h3 className="flex items-center flex-1 text-lg font-semibold gap-2">Top drawer next to sink</h3>
                      <CogIcon className="text-gray-400 hover:text-mui-primary" />
                      <Button>
                        <FormattedMessage id="projects.editButton" />
                      </Button>
                    </div>
                  ))}
                  <Button onClick={() => setModalOpen(true)} variant="text" className="p-0 mt-8 text-mui-primary">
                    <PlusCircleSolid />
                    <FormattedMessage id="projects.addDrawer" />
                  </Button>
                </Expander>
              </div>
            </div>
            <Button onClick={() => setModalOpen(true)}>
              <PlusCircleSolid />
              <FormattedMessage id="projects.addProject" />
            </Button>
          </div>
        </div>
        <Modal
          isOpen={modalOpen}
          onToggle={() => setModalOpen(false)}
          actions={() => (
            <Link href="/project/type" passHref>
              <Button disabled={!description}>Continue</Button>
            </Link>
          )}
        >
          <div className="min-w-2/5vw">
            <div className="flex flex-col w-full px-12 pb-8">
              <h1 className="text-3xl font-semibold">
                <FormattedMessage id="projects.modalTitle" />
              </h1>
              <p className="my-4">
                <FormattedMessage id="projects.modalBody" />
              </p>
              <div className="mt-4">
                <input
                  className="flex w-full px-3 py-2 bg-gray-200 rounded-sm h-14 form-input"
                  type="text"
                  value={description}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={intl.formatMessage({ id: 'projects.modalInputPlaceholder' })}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </AppLayout>
  );
};
