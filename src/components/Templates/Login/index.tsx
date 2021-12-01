import React, { useMemo } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../UI/Button';
import * as yup from 'yup';
import { FormattedMessage, useIntl } from 'react-intl';
import AppLayout from '../../Layouts/AppLayout';
import { TextInput } from '../../UI/Form/TextInput';
import Image from 'next/image';
import Head from 'next/head';
import Spinner from '../../UI/Spinner';
import ErrorMessage from '../../UI/ErrorMessage';

export type LoginTemplateProps = {
  loading?: boolean;
  error?: string;
  onSubmit: (form: { email: string; password: string }) => void;
};

const LoginTemplate: React.FC<LoginTemplateProps> = ({ loading, error, onSubmit }) => {
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
    <AppLayout hideLeft>
      <Head>
        <title>
          {`${intl.formatMessage({ id: 'login.title' })} | ${intl.formatMessage({
            id: 'title'
          })}`}
        </title>
      </Head>
      <div className="fixed min-h-screen overflow-hidden bg-mui-dark min-w-screen">
        <Image
          alt="Mountains"
          src="/images/Background/7px.Kemsley Color Palette 3 Angle.png"
          layout="fill"
          objectFit="cover"
          loader={(props) => props.src}
          unoptimized
          quality={100}
        />
      </div>
      <div className="z-20 flex flex-1 bg-gradient-to-t from-mui-dark via-mui-dark gradient-to-dark">
        <div className="max-w-2xl mx-auto mt-36">
          <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={signupSchema}>
            <Form className="flex flex-col py-12 gap-8" autoComplete="off">
              <h1 className="text-4xl font-semibold text-white">
                <FormattedMessage id="login.header" />
              </h1>
              <TextInput
                name="email"
                className="mui-login-input"
                placeholder={intl.formatMessage({ id: 'login.emailPlaceholder' })}
              />
              <TextInput
                name="password"
                type="password"
                className="mui-login-input"
                placeholder={intl.formatMessage({
                  id: 'login.passwordPlaceholder'
                })}
              />
              <div className="flex justify-between mb-4">
                <Button disabled={loading} type="submit" variant="default">
                  {loading ? <Spinner /> : <FormattedMessage id="login.signInButton" />}
                </Button>
              </div>
              {error && <ErrorMessage error={error} />}
            </Form>
          </Formik>
        </div>
      </div>
    </AppLayout>
  );
};

export default LoginTemplate;
