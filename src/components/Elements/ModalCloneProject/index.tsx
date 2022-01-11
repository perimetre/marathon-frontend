import { useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Project, useCloneProjectMutation } from '../../../apollo/generated/graphql';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';
import Button from '../../UI/Button';
import ErrorMessage from '../../UI/ErrorMessage';
import Modal from '../../UI/Modal';
import Spinner from '../../UI/Spinner';

export type ModalCloneProjectProps = {
  open?: boolean;
  project?: Project;
  onClose: () => void;
};

const ModalCloneProject: React.FC<ModalCloneProjectProps> = ({ open, onClose, project }) => {
  const [cloneProject, { loading, error: mutationError }] = useCloneProjectMutation();

  const handleClone = useCallback(async () => {
    if (project) {
      await cloneProject({
        refetchQueries: ['Projects'],
        variables: {
          id: project.id
        }
      });
      onClose();
    }
  }, [cloneProject, onClose, project]);

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
        <Button onClick={handleClone} disabled={loading}>
          <FormattedMessage id="projects.clone" />
          {loading && <Spinner className="w-6 h-6" />}
        </Button>
      )}
    >
      <div className="min-w-2/6vw">
        <div className="flex flex-col w-full px-12 pb-8">
          <h1 className="text-xl">
            You are about to clone the project <strong>{project?.title}</strong>
          </h1>
          {error && <ErrorMessage error={error} />}
        </div>
      </div>
    </Modal>
  );
};

export default ModalCloneProject;
