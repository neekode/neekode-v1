import { Html, Head, Main, NextScript } from 'next/document';

// Custom Document File, unsure if this is even necessary. The 'true' entry point into the app.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
