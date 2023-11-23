'use client';

import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import store from './redux/store';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({ config });

export default function Providers({ children }) {
  // TODO: Template provided this, unsuure what to do with it.
  // useServerInsertedHTML(() => {
  //   return <>{ CssBaseline.flush() }</>;
  // })

  return (
    <ReduxProvider>
      <ChakraProvider theme={ theme }>
        <NextUIProvider>{ children }</NextUIProvider>
      </ChakraProvider>
    </ReduxProvider>
  );
}

function ReduxProvider({ children }) {
  return <Provider store={ store }>{ children }</Provider>;
}
