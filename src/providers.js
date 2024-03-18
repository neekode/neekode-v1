'use client';

import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mode } from '@chakra-ui/theme-tools';
import store from './redux/store';

const theme = {
  // Initial Configuration for extending theme using general properties
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  // Initial Configuration for extending theme defining specific colors
  colors: {
    brand: {
      50: '#EFF1F5',
      100: '#D3D9E4',
      200: '#B7C1D2',
      300: '#9BA9C0',
      400: '#7E90AE',
      500: '#62789D',
      600: '#4F607D',
      700: '#3B485E',
      800: '#27303F',
      900: '#14181F'
    },
    accent: {
      50: '#F6EEF6',
      100: '#E7D0E7',
      200: '#D7B2D7',
      300: '#C793C7',
      400: '#B875B8',
      500: '#A857A8',
      600: '#864686',
      700: '#653465',
      800: '#432343',
      900: '#221122'
    }
  },
  // Initial Configuration for extending theme defining specific styling to default elements
  styles: {
    global: (props) => ({
      body: {
        bg: mode('brand.100', 'brand.800')(props)
      },
      div: {
        zIndex: 10
      },
      nav: {
        zIndex: 11
      }
    })
  }
};

// Integration of custom theme configuration into my custom ChakraUI
const neekodeTheme = extendTheme(theme);

// Wrapper for all custom providers.
export default function Providers({ children }) {
  return (
    <ReduxProvider>
      <ChakraProvider theme={ neekodeTheme }>
        <NextUIProvider>{ children }</NextUIProvider>
      </ChakraProvider>
    </ReduxProvider>
  );
}

function ReduxProvider({ children }) {
  return <Provider store={ store }>{ children }</Provider>;
}
