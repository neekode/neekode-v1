'use client';

/* This layout acts as the primary container for the application.
It's connected to common hooks, wraps around each page, and renders a loader when...  */
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import useCommonState from '../hooks/common';

const light = extendTheme({
  colors: {
    background: '#defcfc'
  }
});

const dark = extendTheme({
  colors: {
    background: '#001616'
  }
});

export default function AppContainer({ children }) {
  const {
    theme
  } = useCommonState();

  return (
    <main className={ `${theme} text-foreground bg-background h-screen` }>
      <ChakraProvider theme={ theme === 'dark' ? dark : light }>
        { children }
      </ChakraProvider>
    </main>
  );
}
