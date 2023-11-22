/* This layout acts as the primary container for the application.
It's connected to common hooks, wraps around each page, and renders a loader when...  */
import Providers from './providers';
import '../src/styles/globals.css';
import Content from '../src/components/Content';
import Nav from '../src/components/Nav';
import AppContainer from '../src/components/AppContainer';

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        <title>Neekode</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          <AppContainer>
            <Nav />
            <Content>
              { children }
            </Content>
          </AppContainer>
        </Providers>
      </body>
    </html>
  );
}

/**
 * <div
 *         id="content-wrapper"
 *         className={ `${theme}-theme ${mode}-mode` }
 *       >
 *       </div>
 */
