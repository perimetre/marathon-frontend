import { Formik } from 'formik';
import { useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Project, useUpdateProjectMutation } from '../../../apollo/generated/graphql';
import { Button } from '../../UI/Button';
import { TextInput } from '../../UI/Form/TextInput';
import { Modal } from '../../UI/Modal';
import Spinner from '../../UI/Spinner';
import * as yup from 'yup';

export type ModalRenameProjectProps = {
  open?: boolean;
  project?: Project;
  onClose: () => void;
};

const ModalRenameProject: React.FC<ModalRenameProjectProps> = ({ open, onClose, project }) => {
  const [doUpdate, { loading }] = useUpdateProjectMutation();

  const handleSubmit = useCallback(
    async (form: { title: string }) => {
      await doUpdate({
        variables: {
          projectId: Number(project?.id),
          data: {
            title: { set: form.title as string }
          }
        }
      });
      onClose();
    },
    [doUpdate, onClose, project?.id]
  );

  const schema = useMemo(
    () =>
      yup.object().shape({
        title: yup.string().label('Title').required()
      }),
    []
  );

  return (
    <Formik
      initialValues={{ title: project?.title || '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
      validateOnMount
    >
      {({ submitForm, isValid }) => (
        <Modal
          isOpen={open}
          onToggle={onClose}
          actions={() => (
            <Button onClick={submitForm} disabled={!isValid || loading}>
              <FormattedMessage id="projects.rename" />
              {loading && <Spinner className="w-6 h-6" />}
            </Button>
          )}
        >
          <div className="min-w-2/5vw">
            <div className="flex flex-col w-full px-12 pb-8">
              <h1 className="text-3xl font-semibold">
                <FormattedMessage id="projects.modalRenameTitle" />
              </h1>
              <div className="mt-8">
                <TextInput name="title" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Formik>
  );
};

export default ModalRenameProject;
