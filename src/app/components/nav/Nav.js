'use client';

// External
import Link from 'next/link';
import { useRef } from 'react';
import {
  chakra,
  shouldForwardProp
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

// In-app
import Settings from './Settings';
import NeekodeIcon from '../svgs/NeekodeIcon';
import useNavState from '../../hooks/nav';
import useCommonState from '../../hooks/common';
import { selectByRoute } from '../../../redux/slices/nav';

// Still not sure what this does.
const ChakraBox = chakra(motion.div, {

  /** Allow motion props and non-Chakra props to be forwarded */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
});

/**
 * Nav Bar -
 * Does all the things that nav bar does. Custom Made.
 *
 * TODO:
 * - use Saikou as inspo for mobile?
 */
export default function Nav() {
  const {
    dispatch,
    isAppLoading,
    theme,
    handleThemeChange,
    mode,
    handleModeChange
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

  // const bgColor = useColorModeValue('brand.200', 'brand.700');
  // const textColor = useColorModeValue('brand.800', 'brand.100');
  // const accentColor = useColorModeValue('accent.500', 'accent.400');
  // TODO: finish up with the mobile version.
  return (
    <nav
      ref={ navRef }
      className={ `${theme}-nav nav flex items-center sticky top-0 justify-between border-b px-4 py-2` }
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
      <Settings
        theme={ theme }
        handleThemeChange={ handleThemeChange }
        mode={ mode }
        handleModeChange={ handleModeChange }
      />
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