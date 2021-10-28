const env = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
    NEXT_PUBLIC_GRAPHQL_URI: process.env.NEXT_PUBLIC_GRAPHQL_URI
  };
};

export default env;
