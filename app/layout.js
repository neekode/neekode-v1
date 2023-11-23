// External
import React from 'react';
// In-app
import '../src/styles/globals.css';
import Content from '../src/components/Content';
import Nav from '../src/components/Nav';
import Providers from '../src/providers';

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
