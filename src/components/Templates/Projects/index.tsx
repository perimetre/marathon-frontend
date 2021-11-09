import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Button from '../../UI/Button';
import Expander from '../../UI/Expander';
import classNames from 'classnames';
import { Project, ProjectsQuery } from '../../../apollo/generated/graphql';
import Dropdown from '../../UI/Dropdown';
import ModalCreateProject from '../../Elements/ModalCreateProject';
import ModalRenameProject from '../../Elements/ModalRenameProject';
import ModalDeleteProject from '../../Elements/ModalDeleteProject';
import AppLayout from '../../Layouts/AppLayout';
import ErrorMessage from '../../UI/ErrorMessage';
import { ChevronDown, PlusCircle, Settings } from 'react-feather';
import Link from 'next/link';
import Head from 'next/head';

export type ProjectsTemplateProps = {
  data?: ProjectsQuery;
  loading?: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const ProjectsTemplate: React.FC<ProjectsTemplateProps> = ({ data, loading, error, handleTryAgain }) => {
  const intl = useIntl();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<{
    openDelete?: boolean;
    openRename?: boolean;
    project: Project;
  } | null>(null);
  const [expanded, setExpanded] = useState<string[]>(['ac-projects']);

  const handleAccordion = useCallback(
    (key: string) => {
      setExpanded(expanded?.includes(key) ? expanded.filter((f) => f !== key) : [...expanded, key]);
    },
    [expanded]
  );

  return (
    <AppLayout hideLeft>
      <Head>
        <title>
          {`${intl.formatMessage({ id: 'projects.title' })} | ${intl.formatMessage({
            id: 'title'
          })}`}
        </title>
      </Head>
      <div className="min-h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-end bg-mui-dark">
          <div className="w-full h-64" />
          <div className="max-w-3xl px-10 py-16 lg:px-16">
            <h1 className="my-12 text-6xl font-bold text-white">
              <FormattedMessage id="projects.title" />
            </h1>
            <p className="text-lg text-white">
              <FormattedMessage id="projects.description" />
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-3xl px-10 py-16 lg:px-16">
            {error && <ErrorMessage error={`serverErrors.${error}`} handleTryAgain={handleTryAgain} />}
            <div className="w-full h-11 grid grid-cols-2 gap-4">
              {loading ? (
                <div className="w-full h-full mui-skeleton grid" />
              ) : (
                <div className="text-center border-b-8 grid border-mui-primary">
                  <h2 className="text-lg font-semibold">
                    <FormattedMessage id="projects.activeProjects" />
                  </h2>
                </div>
              )}
              {loading ? <div className="w-full h-full mui-skeleton grid" /> : <div className="grid" />}
            </div>
            <div className="mt-16 mb-12">
              <div className="pb-8 mb-10 border-b">
                {loading ? (
                  <div className="w-56 h-7 mui-skeleton grid" />
                ) : (
                  <button className="flex w-full mb-2 text-left" onClick={() => handleAccordion('ac-projects')}>
                    <h3 className="flex items-center flex-1 text-xl font-bold uppercase gap-2">
                      <FormattedMessage id="projects.myProjects" />
                    </h3>
                    <ChevronDown
                      className={classNames(
                        'text-mui-primary transition-all',
                        expanded.includes('ac-projects') && 'rotate-180'
                      )}
                    />
                  </button>
                )}
                <Expander isExpanded={expanded.includes('ac-projects')}>
                  {loading ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-full h-10 mui-skeleton grid" />
                      <div className="w-full h-10 mui-skeleton grid" />
                      <div className="w-full h-10 mui-skeleton grid" />
                    </div>
                  ) : (
                    data?.projects.map((project) => (
                      <div key={project.id} className="flex items-center gap-6">
                        <Link
                          href={{
                            pathname: '/project/[slug]/planner',
                            query: { slug: project.slug }
                          }}
                        >
                          <a className="w-full py-3 hover:underline">
                            <h3 className="flex items-center flex-1 pl-4 text-lg font-semibold gap-2">
                              {project.title}
                            </h3>
                          </a>
                        </Link>
                        <Dropdown
                          content={[
                            {
                              id: 'key-rename',
                              content: (
                                <button
                                  className="text-left"
                                  onClick={() => setModalProject({ openRename: true, project: project as Project })}
                                >
                                  Rename
                                </button>
                              )
                            }
                          ]}
                          footer={[
                            {
                              id: 'key-delete',
                              content: (
                                <button
                                  className="text-left"
                                  onClick={() => setModalProject({ openDelete: true, project: project as Project })}
                                >
                                  Delete
                                </button>
                              )
                            }
                          ]}
                        >
                          <div className="py-3">
                            <Settings className="text-gray-400 hover:text-mui-primary" />
                          </div>
                        </Dropdown>
                      </div>
                    ))
                  )}
                  {loading ? (
                    <div className="h-10 mt-8 w-52 mui-skeleton grid" />
                  ) : (
                    <Button onClick={() => setModalOpen(true)} variant="text" className="p-0 mt-8 text-mui-primary">
                      <PlusCircle />
                      <FormattedMessage id="projects.addDrawer" />
                    </Button>
                  )}
                </Expander>
              </div>
              <div>
                {loading ? (
                  <div className="w-56 h-7 mui-skeleton grid" />
                ) : (
                  <button className="flex w-full mb-2 text-left" onClick={() => handleAccordion('ac-kits')}>
                    <h3 className="flex items-center flex-1 text-xl font-bold uppercase gap-2">
                      <FormattedMessage id="projects.kitPortfolio" />
                    </h3>
                    <ChevronDown
                      className={classNames(
                        'text-mui-primary transition-all',
                        expanded.includes('ac-kits') && 'rotate-180'
                      )}
                    />
                  </button>
                )}
                <Expander isExpanded={expanded.includes('ac-kits')}>{/*TODO: load kits*/}</Expander>
              </div>
            </div>
            {loading && <div className="h-10 w-44 mui-skeleton grid" />}
          </div>
        </div>
        <ModalCreateProject open={modalOpen} onClose={() => setModalOpen(false)} />
        {modalProject?.openDelete && (
          <ModalDeleteProject open onClose={() => setModalProject(null)} project={modalProject?.project} />
        )}
        {modalProject?.openRename && (
          <ModalRenameProject open onClose={() => setModalProject(null)} project={modalProject?.project} />
        )}
      </div>
    </AppLayout>
  );
};

export default ProjectsTemplate;
