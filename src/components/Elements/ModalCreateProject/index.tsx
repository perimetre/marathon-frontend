import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useMemo, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useProjectCreationContext } from '../../Providers/ProjectCreationProvider';
import Button from '../../UI/Button';
import { TextInput } from '../../UI/Form/TextInput';
import Modal from '../../UI/Modal';
import * as yup from 'yup';
import Spinner from '../../UI/Spinner';

export type ModalCreateProjectProps = {
  open?: boolean;
  onClose: () => void;
};

const ModalCreateProject: React.FC<ModalCreateProjectProps> = ({ open, onClose }) => {
  const { setDrawerTitle, clear } = useProjectCreationContext();

  const intl = useIntl();

  const router = useRouter();

  const handleSubmit = useCallback(
    async (data: { title: string }) => {
      clear();
      setDrawerTitle(data.title);
      router.push('/project/type', '/project/type');
    },
    [router, clear, setDrawerTitle]
  );

  const schema = useMemo(
    () =>
      yup.object().shape({
        title: yup.string().label('Title').required()
      }),
    []
  );

  return (
    <Formik initialValues={{ title: '' }} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
      {({ isValid, submitForm, isSubmitting }) => (
        <Modal
          isOpen={open}
          onToggle={onClose}
          actions={() => (
            <Button type="submit" onClick={submitForm} disabled={!isValid}>
              <FormattedMessage id="projects.continue" />
              {isSubmitting && <Spinner className="w-6 h-6" />}
            </Button>
          )}
        >
          <Form>
            <div className="min-w-2/5vw">
              <div className="flex flex-col w-full px-12 pb-8">
                <h1 className="text-3xl font-semibold">
                  <FormattedMessage id="projects.modalTitle" />
                </h1>
                <p className="my-4">
                  <FormattedMessage id="projects.modalBody" />
                </p>
                <div className="mt-4">
                  <TextInput name="title" placeholder={intl.formatMessage({ id: 'projects.modalInputPlaceholder' })} />
                </div>
              </div>
            </div>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default ModalCreateProject;
