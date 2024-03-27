// External
import React from 'react';
// In-app
import '../styles/globals.css';
import Providers from '../providers';
import Content from './components/Content';
import Background from './components/background/Background';
import Nav from './components/nav/Nav';
import Footer from './components/nav/Footer';

// TODO: Dynamic Metadata for SEO
// export async function generateMetadata({ params }) {
//   return { };
// }

export const metadata = {
  title: {
    template: '%s - neekode',
    default: 'work portfolio - neekode'
  }
};

/**
 * Welcome! This is entrypoint to the application.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          { /* Custom AppContainer for pieces like <main> to access to Redux State. */ }
          <main>
            <Nav />
            <Background />
            <Content>
              { children }
            </Content>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
