'use client';

// External
import Link from 'next/link';
import { chakra, shouldForwardProp, Switch } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

// In-app
import { useRef } from 'react';
import NeekodeIcon from './svgs/NeekodeIcon';
import useCommonState from '../hooks/common';
import useNavState from '../hooks/nav';
import { selectByRoute } from '../../redux/slices/nav';

const ChakraBox = chakra(motion.div, {

  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
});

/**
 * Nav Bar -
 * Does all the things that nav bar does.
 *
 * TODO:
 * - Scroll to nav to each route.
 *    -> animated scroll bar as border
 * - use Saikou as inspo for mobile?
 * -
 */
export default function Nav() {
  const {
    dispatch,
    theme,
    isAppLoading,
    handleThemeChange
    // mode
  } = useCommonState();

  const {
    tabs,
    selectedIndex,
    navItemsRef,
    isScrollDisplayed,
    selectedTabElement,
    handleHovering
  } = useNavState();

  const navRef = useRef({});
  // TODO: finish up with the mobile version.
  return (
    <nav
      ref={ navRef }
      className="flex items-center bg-background sticky top-0 justify-between border-b px-4 py-2"
      onMouseEnter={ () => handleHovering(true) }
      onMouseLeave={ () => handleHovering(false) }
    >
      { /* Mapping from nav constant for all nav buttons. */ }
      { tabs.map(({
        name,
        route
      }, i) => {
        const isIntroLink = name === 'intro';
        const isSelected = selectedIndex === i;
        return (
          <div
            key={ `${name}-key` }
            ref={ navItemsRef.current[i] }
            className={ `nav-item flex my-auto items-center underline-offset-4 transition-all ${isSelected ? '' : 'hover:scale-125'}` }
          >
            <Link
              href={ route }
              className={ isSelected ? 'cursor-default' : '' }
              onClick={ () => dispatch(selectByRoute({ route })) }
            >
              { !isIntroLink
                ? name
                : <NeekodeIcon theme={ theme } /> }
            </Link>
          </div>
        );
      }) }
      <div className="my-auto">
        <Switch onChange={ handleThemeChange } />
      </div>
      { isScrollDisplayed && !isAppLoading
        && (
          // TODO: animation improvements.
          <ChakraBox
            animate={ {
              scale: [0.3, 0.5],
              borderRadius: ['10%']
            } }
            transition={ {
              duration: 0.7
            } }
            padding="1"
            position="absolute"
            bg={ theme === 'dark' ? '#fff' : '#000' }
            top={ `${Number(navRef.current.getBoundingClientRect().height) - 5}px` }
            left={ `${selectedTabElement.left - 40}px` }
            width={ `${selectedTabElement.width + 80}px` }
            height="4px"
          />
        ) }
    </nav>
  );
}
