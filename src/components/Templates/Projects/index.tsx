import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../UI/Button';
import { Expander } from '../../UI/Expander';
import classNames from 'classnames';
import { Project, ProjectsQuery } from '../../../apollo/generated/graphql';
import { Dropdown } from '../../UI/Dropdown';
import ModalCreateProject from '../../Elements/ModalCreateProject';
import ModalRenameProject from '../../Elements/ModalRenameProject';
import ModalDeleteProject from '../../Elements/ModalDeleteProject';
import AppLayout from '../../Layouts/AppLayout';
import { ChevronDownIcon } from '../../UI/Icons/chevronDown';
import { PlusCircleSolid } from '../../UI/Icons/plusCircle';
import { CogIcon } from '../../UI/Icons/Gog';
import ErrorMessage from '../../UI/ErrorMessage';

export type ProjectsTemplateProps = {
  data?: ProjectsQuery;
  loading?: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const ProjectsTemplate: React.FC<ProjectsTemplateProps> = ({ data, loading, error, handleTryAgain }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<{
    openDelete?: boolean;
    openRename?: boolean;
    project: Project;
  } | null>(null);
  const [expanded, setExpanded] = useState<string[]>([]);

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
                  <h2 className="text-lg font-medium">
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
                    <ChevronDownIcon
                      className={classNames(
                        'text-mui-primary transition-all',
                        expanded.includes('ac-projects') && 'rotate-180'
                      )}
                    />
                  </button>
                )}
                <Expander isExpanded={expanded.includes('ac-projects')}>
                  {data?.projects.map((project) => (
                    <div key={project.id} className="flex items-center mt-5 gap-6">
                      <h3 className="flex items-center flex-1 text-lg font-semibold gap-2">{project.title}</h3>
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
                        <CogIcon className="text-gray-400 hover:text-mui-primary" />
                      </Dropdown>
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
                {loading ? (
                  <div className="w-56 h-7 mui-skeleton grid" />
                ) : (
                  <button className="flex w-full mb-2 text-left" onClick={() => handleAccordion('ac-kits')}>
                    <h3 className="flex items-center flex-1 text-xl font-bold uppercase gap-2">
                      <FormattedMessage id="projects.kitPortfolio" />
                    </h3>
                    <ChevronDownIcon
                      className={classNames(
                        'text-mui-primary transition-all',
                        expanded.includes('ac-kits') && 'rotate-180'
                      )}
                    />
                  </button>
                )}
                <Expander isExpanded={expanded.includes('ac-kits')}>
                  <Button onClick={() => setModalOpen(true)} variant="text" className="p-0 mt-8 text-mui-primary">
                    <PlusCircleSolid />
                    <FormattedMessage id="projects.addDrawer" />
                  </Button>
                </Expander>
              </div>
            </div>
            {loading ? (
              <div className="h-10 w-44 mui-skeleton grid" />
            ) : (
              <Button onClick={() => setModalOpen(true)}>
                <PlusCircleSolid />
                <FormattedMessage id="projects.addProject" />
              </Button>
            )}
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
