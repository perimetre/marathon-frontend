import * as Sentry from '@sentry/nextjs';
import { Severity } from '@sentry/nextjs';
import { Extras } from '@sentry/types';

const error = (error: unknown, message?: string, extra: Extras = {}) => {
  if (message) {
    console.error(message, error, extra);
  } else {
    console.error(error, extra);
  }

  return Sentry.captureException(error, {
    level: Severity.Error,
    extra: { message, ...(extra || {}) }
  });
};

const fatal = (error: unknown, message?: string, extra: Extras = {}) => {
  if (message) {
    console.error(message, error, extra);
  } else {
    console.error(error, extra);
  }

  return Sentry.captureException(error, {
    level: Severity.Fatal,
    extra: { message, ...(extra || {}) }
  });
};

const info = (message: string, extra: Extras = {}) => {
  console.log(message, extra);
  return Sentry.captureMessage(message, { level: Severity.Info, extra });
};

const debug = (message: string, extra: Extras = {}) => {
  console.log('[DEBUG] -- ', message, extra);
  return Sentry.captureMessage(message, { level: Severity.Debug, extra });
};

const warn = (message: string, extra: Extras = {}) => {
  console.warn(message, extra);
  return Sentry.captureMessage(message, { level: Severity.Warning, extra });
};

const logging = {
  error,
  fatal,
  info,
  debug,
  warn
};

export default logging;
