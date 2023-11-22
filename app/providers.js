'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { NextUIProvider } from '@nextui-org/react';
import store from '../src/redux/store';

export default function Providers({ children }) {
  // useServerInsertedHTML(() => {
  //   return <>{ CssBaseline.flush() }</>;
  // })

  return (
    <ReduxProvider>
      <NextUIProvider>{ children }</NextUIProvider>
    </ReduxProvider>
  );
}

function ReduxProvider({ children }) {
  return <Provider store={ store }>{ children }</Provider>;
}
