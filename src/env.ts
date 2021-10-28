const env = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE
  };
};

export default env;
