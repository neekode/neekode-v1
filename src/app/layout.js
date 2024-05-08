// External
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeApp } from 'firebase/app';
// In-app
import '../styles/globals.css';
import Providers from '../providers';
import Content from './components/Content';
import Background from './components/background/Background';
import Nav from './components/nav/Nav';
import Footer from './components/nav/Footer';

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhPQAWUCw6mH0_ICQIFt1l_GGHbO2NEo8',
  authDomain: 'neekode-e06c8.firebaseapp.com',
  projectId: 'neekode-e06c8',
  storageBucket: 'neekode-e06c8.appspot.com',
  messagingSenderId: '817745175526',
  appId: '1:817745175526:web:cf950b989f057387cd2c27'
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
