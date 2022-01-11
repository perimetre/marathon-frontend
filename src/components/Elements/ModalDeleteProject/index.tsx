import { useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Project, useDeleteProjectMutation } from '../../../apollo/generated/graphql';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';
import Button from '../../UI/Button';
import ErrorMessage from '../../UI/ErrorMessage';
import Modal from '../../UI/Modal';
import Spinner from '../../UI/Spinner';

export type ModalDeleteProjectProps = {
  open?: boolean;
  project?: Project;
  onClose: () => void;
};

const ModalDeleteProject: React.FC<ModalDeleteProjectProps> = ({ open, onClose, project }) => {
  const [deleteProject, { loading, error: mutationError }] = useDeleteProjectMutation();

  const handleDelete = useCallback(async () => {
    if (project) {
      await deleteProject({
        refetchQueries: ['Projects'],
        variables: {
          projectId: project.id
        }
      });
      onClose();
    }
  }, [deleteProject, onClose, project]);

  const error = useMemo(
    () =>
      mutationError ? getLocaleIdFromGraphqlError(mutationError.graphQLErrors, mutationError.networkError) : undefined,
    [mutationError]
  );

  return (
    <Modal
      isOpen={open}
      onToggle={onClose}
      actions={() => (
        <Button onClick={handleDelete} disabled={loading}>
          <FormattedMessage id="projects.delete" />
          {loading && <Spinner className="w-6 h-6" />}
        </Button>
      )}
    >
      <div className="min-w-2/6vw">
        <div className="flex flex-col w-full px-12 pb-8">
          <h1 className="text-3xl font-semibold">
            <FormattedMessage id="projects.modalDeleteTitle" />
          </h1>
          <p className="my-4">
            <FormattedMessage id="projects.modalDeleteBody" />
          </p>
          <strong>{project?.title}</strong>
          {error && <ErrorMessage error={error} />}
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteProject;
