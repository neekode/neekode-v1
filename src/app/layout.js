// External
import React from 'react';
// In-app
import '../styles/globals.css';
import Providers from '../providers';
import Content from './components/Content';
import Nav from './components/Nav';

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
          { /* Custom AppContainer for poot pieces like <main> to access to Redux State. */ }
          <main className="text-foreground bg-background h-screen">
            <Nav />
            <Content>
              { children }
            </Content>
          </main>
        </Providers>
      </body>
    </html>
  );
}
