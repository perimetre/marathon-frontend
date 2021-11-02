import Link from 'next/link';
import { useMemo } from 'react';
import { Form, Formik } from 'formik';
import { Button } from '../../UI/Button';
import * as yup from 'yup';
import { FormattedMessage, useIntl } from 'react-intl';
import AppLayout from '../../Layouts/AppLayout';

export type LoginTemplateProps = {
  onSubmit: (form: { email: string; password: string }) => void;
};

export const LoginTemplate: React.FC<LoginTemplateProps> = ({ onSubmit }) => {
  const intl = useIntl();

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
    <AppLayout>
      <div className="flex flex-1 bg-mui-dark">
        <div className="container flex justify-center mx-auto">
          <div className="max-w-2xl mx-auto mt-36">
            <h1 className="text-4xl font-semibold text-white">
              <FormattedMessage id="login.title" />
            </h1>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              onSubmit={onSubmit}
              validationSchema={signupSchema}
            >
              <Form className="flex flex-col py-12 gap-8" autoComplete="off">
                <input
                  type="email"
                  placeholder={intl.formatMessage({ id: 'login.emailPlaceholder' })}
                  className="w-full p-0 py-4 text-xl text-white placeholder-white bg-transparent border-0 border-b border-white outline-none h-14 form-input"
                />
                <input
                  type="password"
                  placeholder={intl.formatMessage({ id: 'login.passwordPlaceholder' })}
                  className="w-full p-0 py-4 text-xl text-white placeholder-white bg-transparent border-0 border-b border-white outline-none h-14 form-input"
                />
              </Form>
            </Formik>
            <div className="flex justify-between mb-8">
              <Link href="/projects" passHref>
                <Button variant="default">
                  <FormattedMessage id="login.singinButton" />
                </Button>
              </Link>
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
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
