const env = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    // Locale
    NEXT_PUBLIC_DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
    // Backend
    NEXT_PUBLIC_GRAPHQL_URI: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    NEXT_PUBLIC_STATUS_URI: process.env.NEXT_PUBLIC_STATUS_URI,
    // Unity
    NEXT_PUBLIC_UNITY_PUBLIC_FOLDER: process.env.NEXT_PUBLIC_UNITY_PUBLIC_FOLDER,
    NEXT_PUBLIC_UNITY_BUILD_NAME: process.env.NEXT_PUBLIC_UNITY_BUILD_NAME,
    NEXT_PUBLIC_UNITY_COMPANY_NAME: process.env.NEXT_PUBLIC_UNITY_COMPANY_NAME,
    NEXT_PUBLIC_UNITY_PRODUCT_NAME: process.env.NEXT_PUBLIC_UNITY_PRODUCT_NAME,
    NEXT_PUBLIC_UNITY_PRODUCT_VERSION: process.env.NEXT_PUBLIC_UNITY_PRODUCT_VERSION,
    NEXT_PUBLIC_BEARER: process.env.NEXT_PUBLIC_BEARER,
    // Unity player
    NEXT_PUBLIC_UNITY_PUBLIC_MEDIA_URI: process.env.NEXT_PUBLIC_UNITY_PUBLIC_MEDIA_URI,
    NEXT_PUBLIC_UNITY_ASSET_BUNDLE_FOLDER: process.env.NEXT_PUBLIC_UNITY_ASSET_BUNDLE_FOLDER,
    NEXT_PUBLIC_UNITY_DEFAULT_PLATFORM: process.env.NEXT_PUBLIC_UNITY_DEFAULT_PLATFORM,
    NEXT_PUBLIC_UNITY_MODULE_MATERIALS_FOLDER: process.env.NEXT_PUBLIC_UNITY_MODULE_MATERIALS_FOLDER,
    NEXT_PUBLIC_UNITY_MANIFEST_ASSET_NAME: process.env.NEXT_PUBLIC_UNITY_MANIFEST_ASSET_NAME
  };
};

export default env;
