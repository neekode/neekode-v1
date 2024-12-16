import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useColorMode, useColorModeValue, useTheme, useToken } from '@chakra-ui/react';
import {
  setColorHexes,
  setColorValues,
  setIsAppLoading,
  setMode,
  setTheme,
  setViewport
} from '../../redux/slices/common';

/**
 * Common State utilized across the application.
 */
export default function useCommonState() {
  const themeHook = useTheme();
  const dispatch = useDispatch();
  // Custom Color Mode Hook from ChakraUI. I integrate this within the Redux.
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  const {
    theme,
    mode,
    viewport: {
      isMobile
    },
    loading: {
      app: isAppLoading
    },
    appSections
  } = useSelector((state) => state.common);

  /**
   * useEffect - App Init.
   * The first React logic that runs.
   * - Handles App loading State
   * - Adds native browser events: on scroll,
   */
  useEffect(() => {
    const updateViewport = () => {
      const {
        scrollX,
        scrollY
      } = window;
      dispatch(setViewport({
        height: window.innerHeight,
        width: window.innerWidth,
        isMobile: window.innerWidth <= 768,
        isTablet: window.innerWidth > 768 && window.innerWidth <= 1090,
        scrollX,
        scrollY
      }));
    };

    updateViewport();
    dispatch(setIsAppLoading(false));
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, [dispatch]);

  // Color Values Selected Based on Color Mode.
  const colorValues = {
    textColor: useColorModeValue('brand.800', 'brand.100'),
    iconColor: useColorModeValue('brand.700', 'brand.200'),
    bgColor: useColorModeValue('brand.200', 'brand.700'),
    innerWrapperColor: useColorModeValue('accent.200', 'accent.800'),
    neutralColor: useColorModeValue('neutral.500', 'neutral.300'),
    accentColor: useColorModeValue('accent.500', 'accent.400')
  };
  const darkerBgHex = useToken('colors', 'brand.800');

  /**
   * useEffect - Setting App Colors State
   */
  useEffect(() => {
    if (!isAppLoading) {
      // Colors Converted to Hex Values based on above, as well as extra colors.
      const colorHexes = {
        textHex: themeHook.colors.brand[colorValues.textColor.split('.')[1]],
        iconHex: themeHook.colors.brand[colorValues.iconColor.split('.')[1]],
        bgHex: themeHook.colors.brand[colorValues.bgColor.split('.')[1]],
        innerWrapperHex: themeHook.colors.brand[colorValues.innerWrapperColor.split('.')[1]],
        neutralHex: themeHook.colors.brand[colorValues.neutralColor.split('.')[1]],
        accentHex: themeHook.colors.accent[colorValues.accentColor.split('.')[1]],
        darkerBgHex
      };

      dispatch(setColorValues(colorValues));
      dispatch(setColorHexes(colorHexes));
    }
  }, [isAppLoading]);

  /**
   * Callback - On Wheel Handler.
   * TODO: what to do with this?
   */
  // const onWheel = useCallback((e) => {
  //
  // }, []);
  /**
   * useEffect - Scroll Event Listener
   * Tracks onWheel Event and Scroll State for various purposes.
   */
  // useEffect(() => {
  //   // add eventlistener to window
  //   window.addEventListener('wheel', onWheel);
  //   // remove event on unmount to prevent a memory leak with the cleanup
  //   return () => {
  //     window.removeEventListener('wheel', onWheel);
  //   };
  // }, [onWheel]);

  /**
   * Callback - Click handler for the theme switcher, switches
   * both the CharkraUI colormode state (localstorage)
   * as well as my own redux state.
   */
  const handleThemeChange = useCallback(() => {
    toggleColorMode();
    dispatch(setTheme(colorMode));
  }, [colorMode, dispatch, toggleColorMode]);

  /**
   * Callback - Click handler for the mode switcher.
   * Switches between 'simple' and 'fancy' mode.
   * TODO: anything else here?
   */
  const handleModeChange = useCallback((newMode) => {
    dispatch(setMode(newMode));
  }, [dispatch]);

  /**
   * useEffect - Watches & Sets Color Mode in the Redux.
   */
  useEffect(() => {
    dispatch(setTheme(colorMode));
  }, [colorMode, dispatch]);

  return {
    theme,
    mode,
    isMobile,
    handleThemeChange,
    handleModeChange,
    dispatch,
    isAppLoading,
    appSections
  };
}
