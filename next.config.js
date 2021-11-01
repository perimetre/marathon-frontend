/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['default', 'en', 'fr'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    // Ref, fix: https://github.com/vercel/next.js/discussions/18419#discussioncomment-1561577
    defaultLocale: 'default',
    localeDetection: false
  },
  trailingSlash: true
};
