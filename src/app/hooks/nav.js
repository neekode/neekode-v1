import { useSelector } from 'react-redux';
import { createRef, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/**
 * Navigation State
 */
export default function useNavState() {
  const router = useRouter();
  const pathname = usePathname();
  const navItemsRef = useRef([]);

  const {
    loading: { app: isAppLoading }
  } = useSelector((state) => state.common);

  const {
    topTabs,
    selectedIndex
  } = useSelector((state) => state.nav);

  /**
   * useEffect - Nav Init.
   * Depending on where user landed, we can set the
   * currently selected tab in the redux state.
   *
   * Here we also set the Element Refs of each of the nav items.
   * This way, we can track where to place the animated underline.
   */
  useEffect(() => {
    if (!isAppLoading) {
      navItemsRef.current = Array(topTabs.length)
        .fill()
        .map((_, i) => navItemsRef.current[i] || createRef());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [pathname]);

  return {
    topTabs,
    selectedIndex,
    navItemsRef,
    router
  };
}
