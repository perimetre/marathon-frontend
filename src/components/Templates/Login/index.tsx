import { useMemo } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../UI/Button';
import * as yup from 'yup';
import { FormattedMessage, useIntl } from 'react-intl';
import AppLayout from '../../Layouts/AppLayout';
import { TextInput } from '../../UI/Form/TextInput';
import { XCircleSolid } from '../../UI/Icons/xCircle';
import { useRouter } from 'next/router';
import Image from 'next/image';

export type LoginTemplateProps = {
  onSubmit: (form: { email: string; password: string }) => void;
};

const LoginTemplate: React.FC<LoginTemplateProps> = ({ onSubmit }) => {
  const intl = useIntl();

  const router = useRouter();

  const signupSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup
          .string()
          .email()
          .label(intl.formatMessage({ id: 'login.emailPlaceholder' }))
          .required(),
        password: yup
          .string()
          .min(6)
          .label(intl.formatMessage({ id: 'login.passwordPlaceholder' }))
          .required()
      }),
    [intl]
  );

  return (
    <AppLayout
      appendRight={() => (
        <button className="pr-4" onClick={() => router.push('/', '/')}>
          <XCircleSolid className="text-mui-primary h-9 w-9" />
        </button>
      )}
    >
      <div className="fixed min-h-screen overflow-hidden min-w-screen">
        <Image
          alt="Mountains"
          src="/images/Background/7px.Kemsley Color Palette 3 Angle.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="z-20 flex flex-1 bg-gradient-to-t from-mui-dark via-mui-dark gradient-to-dark">
        <div className="max-w-2xl mx-auto mt-36">
          <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={signupSchema}>
            <Form className="flex flex-col py-12 gap-8" autoComplete="off">
              <h1 className="text-4xl font-semibold text-white">
                <FormattedMessage id="login.title" />
              </h1>
              <TextInput
                name="email"
                className="mui-login-input"
                placeholder={intl.formatMessage({ id: 'login.emailPlaceholder' })}
              />
              <TextInput
                name="password"
                className="mui-login-input"
                placeholder={intl.formatMessage({
                  id: 'login.passwordPlaceholder'
                })}
              />
              <div className="flex justify-between mb-8">
                <Button type="submit" variant="default">
                  <FormattedMessage id="login.signinButton" />
                </Button>
                <Button variant="text" className="px-0 text-gray-300">
                  <FormattedMessage id="login.forgotPass" />
                </Button>
              </div>
              <div>
                <Button variant="text" className="px-0 text-white">
                  <FormattedMessage
                    id="login.dontHaveAccount"
                    values={{
                      message: (
                        <p className="text-gray-300">
                          <FormattedMessage id="login.startDesigning" />
                        </p>
                      )
                    }}
                  />
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </AppLayout>
  );
};

export default LoginTemplate;
