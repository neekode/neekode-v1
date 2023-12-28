import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { setIsAppLoading, setTheme } from '../../redux/slices/common';

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
    loading: {
      app: isAppLoading
    }
  } = useSelector((state) => state.common);

  /**
   * useEffect - App Init.
   * The first React logic that runs.
   * - Handles App loading State
   * - Sets initial theme based on user's system preference.
   */
  useEffect(() => {
    dispatch(setIsAppLoading(false));
    dispatch(setTheme(colorMode));
    // TODO?: not running on save in local?
  }, [dispatch, colorMode]);

  /**
   * Callback - Click handler for the theme switcher, switches
   * both the CharkraUI colormode state (localstorage)
   * as well as my own redux state.
   */
  const handleThemeChange = useCallback(() => {
    toggleColorMode();
    dispatch(setTheme(colorMode));
  }, [colorMode, dispatch, toggleColorMode]);

  return {
    theme,
    mode,
    handleThemeChange,
    isAppLoading
  };
}
