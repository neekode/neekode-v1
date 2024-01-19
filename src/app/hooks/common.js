import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { setIsAppLoading, setScroll, setTheme } from '../../redux/slices/common';

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
    loading: {
      app: isAppLoading
    }
  } = useSelector((state) => state.common);

  /**
   * Callback - On Wheel Handler.
   * TODO: I want to use the wheel a bunch to control a lot of the website.
   */
  const onWheel = useCallback((e) => {
    const direction = e.deltaY < 0 ? 'up' : 'down';
    dispatch(setScroll({
      direction,
      changes: scroll.changes + 1
    }));
  }, [scroll.changes]);

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
   * useEffect - App Init.
   * The first React logic that runs.
   * - Handles App loading State
   * - Adds native browser events: on scroll,
   */
  useEffect(() => {
    dispatch(setIsAppLoading(false));
  }, []);

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
  }, [colorMode]);

  return {
    theme,
    mode,
    handleThemeChange,
    isAppLoading
  };
}
