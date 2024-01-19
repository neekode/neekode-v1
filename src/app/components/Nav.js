'use client';

// External
import Link from 'next/link';
import { chakra, shouldForwardProp, Switch } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

// In-app
import NeekodeIcon from './svgs/NeekodeIcon';
import useCommonState from '../hooks/common';
import useNavState from '../hooks/nav';

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
    theme,
    handleThemeChange
    // mode
  } = useCommonState();

  const {
    tabs,
    selectedIndex,
    navItemsRef,
    isHovered,
    handleHovering
  } = useNavState();

  const selectedTabElement = navItemsRef?.current?.[selectedIndex]?.current;
  return (
    <nav
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
            className={ `my-auto underline-offset-4 ${isSelected ? '' : 'hover:scale-125'}` }
          >
            <Link
              href={ route }
              className={ isSelected ? 'cursor-default' : '' }
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
      { isHovered
        && (
          // TODO: animation improvements. satisfying scrollbar.
          <ChakraBox
            animate={ {
              scale: [0.3, 0.45],
              borderRadius: ['10%']
            } }
            transition={ {
              duration: 0.7
            } }
            padding="1"
            position="absolute"
            bg={ theme === 'dark' ? '#fff' : '#000' }
            top={ `${Number(selectedTabElement?.getBoundingClientRect().y) + 34}px` }
            left={ `${Number(selectedTabElement?.getBoundingClientRect().x) - 50}px` }
            width={ `${Number(selectedTabElement?.clientWidth) + 100}px` }
            height="4px"
          />
        ) }
    </nav>
  );
}
