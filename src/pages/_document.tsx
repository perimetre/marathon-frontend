import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Ref: https://nextjs.org/docs/advanced-features/custom-document
/**
 * A custom Document that is commonly used to augment your application's <html> and <body> tags.
 */
class MyDocument extends Document {
  /**
   * The method used to prepare server side data
   *
   * @param ctx The next.js context
   */
  static async getInitialProps(ctx: DocumentContext) {
    // Ref: https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      /**
       * The method that should be called when the page is rendered
       */
      ctx.renderPage = () =>
        originalRenderPage({
          /**
           * A wrapper of the original app render
           *
           * @param App the original app component
           */
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="toast-root"></div>
          <div id="modal-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
