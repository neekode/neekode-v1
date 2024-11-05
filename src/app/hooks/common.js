import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import {
  setIsAppLoading,
  setMode,
  setScroll,
  setTheme,
  setViewport
} from '../../redux/slices/common';

/**
 * Common State utilized across the application.
 */
export default function useCommonState() {
  const dispatch = useDispatch();
  // Custom Color Mode Hook from ChakraUI. I integrate this within the Redux.
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  const {
    theme,
    mode,
    scroll,
    viewport: { isMobile },
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
    dispatch(setIsAppLoading(false));

    const updateViewport = () => {
      dispatch(setViewport({
        height: window.innerHeight,
        width: window.innerWidth,
        isMobile: window.innerWidth <= 768,
        isTablet: window.innerWidth > 768 && window.innerWidth <= 1090
      }));
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, [dispatch]);

  /**
   * Callback - On Wheel Handler.
   * TODO: I want to use the wheel a bunch to control a lot of the website.
   */
  const onWheel = useCallback((e) => {
    if (!isMobile) {
      const direction = e.deltaY < 0 ? 'up' : 'down';
      dispatch(setScroll({
        direction,
        changes: scroll.changes + 1
      }));
    }
  }, [scroll.changes, isMobile, dispatch]);

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
   * useEffect - Scroll Event Listener
   * Tracks onWheel Event and Scroll State for various purposes.
   */
  useEffect(() => {
    // add eventlistener to window
    window.addEventListener('wheel', onWheel);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [onWheel]);

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
