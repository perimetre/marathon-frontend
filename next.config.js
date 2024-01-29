/** @type {import('next').NextConfig} */
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const moduleExports = {
  reactStrictMode: true,
  images: { domains: ['marathon-media-dev01.nyc3.digitaloceanspaces.com'] },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['default', 'en' /*'fr'*/],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    // Ref, fix: https://github.com/vercel/next.js/discussions/18419#discussioncomment-1561577
    defaultLocale: 'default',
    localeDetection: true
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate'
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/projects',
        permanent: true
      }
    ];
  }
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = moduleExports;
