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
  const navItemsRef = useRef([]);

  const {
    scroll,
    loading: { app: isAppLoading }
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
      debugger;
      dispatch(selectByRoute({ route: pathname }));
    }

    navItemsRef.current = Array(tabs.length)
      .fill()
      .map((_, i) => navItemsRef.current[i] || createRef());
  }, [pathname]);

  /**
   * useEffect - Scroll Route Navigation
   * If user's mouse is hovered over the navbar, they can scroll to navigate routes.
   */
  const hasScrolled = useRef(false);
  // Used for determining whether the animated scrollbar is rendered
  const [isScrollDisplayed, setIsScrollDisplayed] = useState(true);
  // Used for determining whether to control the nav bar with scrolling
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (isHovered) {
      if (scroll && !hasScrolled.current) {
        dispatch(selectByWheel({ direction: scroll.direction }));
        hasScrolled.current = true;
        setTimeout(() => {
          hasScrolled.current = false;
        }, 400);
      }
    }
  }, [scroll.changes, hasScrolled]);

  /**
   * useEffect - Select Route Based on Index State
   * Also sets the current selectedTabElement.
   */
  const [selectedTabElement, setSelectedTabElement] = useState({
    element: {},
    left: 0,
    top: 0,
    width: 0
  });
  useEffect(() => {
    router.push(tabs[selectedIndex].route);

    if (navItemsRef.current[0].current) {
      const { current: element } = navItemsRef.current[selectedIndex];
      setSelectedTabElement({
        element: element,
        left: Number(element.offsetLeft),
        width: Number(element.clientWidth)
      });

      setIsScrollDisplayed(false);
      setTimeout(() => {
        setIsScrollDisplayed(true);
      }, 200);
    }
  }, [selectedIndex, window.innerWidth, isAppLoading]);

  /**
   * Callback - Attached to <nav>
   *
   * When navbar is hovered:
   * - Overrides the .onscroll method to prevent scrolling of the
   * body navbar while user is scroll the routes in the navbar.
   * - Sets local state determining isHovered.
   */
  const handleHovering = useCallback((isEntered) => {
    const scrollTop = window.pageYOffset;
    if (isEntered) {
      window.onscroll = () => window.scrollTo(0, scrollTop);
    } else {
      window.onscroll = () => {
      };
    }
    setTimeout(() => {
      setIsHovered(isEntered);
    }, 200);
  }, []);

  return {
    tabs,
    selectedIndex,
    navItemsRef,
    isScrollDisplayed,
    selectedTabElement,
    handleHovering
  };
}
