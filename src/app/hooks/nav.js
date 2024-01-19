import { useDispatch, useSelector } from 'react-redux';
import { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { selectByRoute, selectByWheel } from '../../redux/slices/nav';

/**
 * Navigation State
 */
export default function useNavState() {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const navItemsRef = useRef([]);

  const {
    scroll
  } = useSelector((state) => state.common);

  const {
    tabs,
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
    // TODO?
    if (scroll.changes === 0) {
      dispatch(selectByRoute({ route: pathname }));
    }

    navItemsRef.current = Array(tabs.length)
      .fill()
      .map((_, i) => navItemsRef.current[i] || createRef());
  }, [pathname]);

  /**
   * useEffect - Scroll Route Navigation
   * If user's mouse is hovered over the navbar, they can scroll to navigate routes.
   *
   * TODO!
   */
  useEffect(() => {
    if (isHovered) {
      if (scroll) {
        dispatch(selectByWheel({ direction: scroll.direction }));
      }
    }
  }, [scroll.changes]);

  /**
   * useEffect - Select Route Based on Index State
   */
  useEffect(() => {
    router.push(tabs[selectedIndex].route);
  }, [selectedIndex]);

  /**
   * Callback - When navbar is hovered this callback:
   * - Overrides the .onscroll method to prevent scrolling of the
   * body navbar while user is scroll the routes in the navbar.
   * - Sets is isHovered local state.
   */
  const handleHovering = useCallback((isEntered) => {
    const scrollTop = window.pageYOffset;
    if (isEntered) {
      window.onscroll = () => window.scrollTo(0, scrollTop);
    } else {
      window.onscroll = () => {
      };
    }
    setIsHovered(isEntered);
  }, []);

  return {
    tabs,
    selectedIndex,
    navItemsRef,
    isHovered,
    handleHovering
  };
}
