/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { domains: ['marathon-media-dev01.nyc3.digitaloceanspaces.com'] },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en' /*'fr'*/, , 'catchAll'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    // Ref, fix: https://github.com/vercel/next.js/discussions/18419#discussioncomment-327128
    defaultLocale: 'catchAll',
    defaultNS: undefined,
    // Ref, fix: https://github.com/vercel/next.js/discussions/18419#discussioncomment-327128
    async redirects() {
      return JSON.parse(
        JSON.stringify([
          {
            source: '/catchAll',
            destination: '/en',
            locale: false,
            permanent: false
          },
          {
            source: '/catchAll/(!api/):slug*',
            destination: '/en/:slug*',
            locale: false,
            permanent: false
          }
        ])
      );
    }
  }
};
