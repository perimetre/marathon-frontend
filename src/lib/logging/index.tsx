const error = (error: Error, message?: string, extra: Record<string, unknown> | string = {}) => {
  if (message) {
    console.error(message, error, extra);
  } else {
    console.error(error, extra);
  }
};

const fatal = (error: Error, message?: string, extra: Record<string, unknown> | string = {}) => {
  if (message) {
    console.error(message, error, extra);
  } else {
    console.error(error, extra);
  }
};

const info = (message: string, extra: Record<string, unknown> | string = {}) => {
  console.log(message, extra);
};

const debug = (message: string, extra: Record<string, unknown> | string = {}) => {
  console.log('sentry.debug', message, extra);
};

const warn = (message: string, extra: Record<string, unknown> | string = {}) => {
  console.warn(message, extra);
};

const logging = {
  error,
  fatal,
  info,
  debug,
  warn
};

export default logging;
