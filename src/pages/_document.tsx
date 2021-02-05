/* eslint-disable filenames/match-regex */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
//! TODO: use Hooks
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              /* @ts-ignore*/
              <App {...props} />
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          /* @ts-ignore*/
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
