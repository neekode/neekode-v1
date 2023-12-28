import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setSelected } from '../../redux/slices/nav';

/**
 * Common State utilized across the application.
 */
export default function useNavState() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    // selected
  } = useSelector((state) => state.nav);

  /**
   * useEffect - Nav Init.
   * Depending on where user landed, we can set the
   * currently selected tab in the redux state.
   *
   *
   */
  useEffect(() => {
    const { route } = router;
    dispatch(setSelected({ route }));
  }, [router]);

  /**
   * Callback - Click handler for the theme switcher, switches
   * both the CharkraUI colormode state (localstorage)
   * as well as my own redux state.
   */
  // const temp = useCallback(() => {
  //
  // }, []);

  return {
    // selected
  };
}
