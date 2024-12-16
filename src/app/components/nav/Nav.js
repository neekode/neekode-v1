'use client';

import React, { useEffect, useRef, useState } from 'react';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Settings from './Settings';
import NeekodeIcon from '../svgs/NeekodeIcon';
import useNavState from '../../hooks/nav';
import useCommonState from '../../hooks/common';
import { selectByLink } from '../../../redux/slices/nav';

// Chakra-enhanced motion div
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
});

export default function Nav() {
  const {
    dispatch,
    theme,
    handleThemeChange,
    mode,
    handleModeChange
  } = useCommonState();
  const {
    topTabs,
    navItemsRef,
    selectedIndex
  } = useNavState();

  const {
    colorHexes,
    viewport: { isMobile }
  } = useSelector((state) => state.common);

  const [activeTabStyles, setActiveTabStyles] = useState({
    left: 0,
    width: 0
  });
  const navRef = useRef(null);

  // Effect to calculate active tab position and width
  useEffect(() => {
    const activeIndex = topTabs.findIndex((tab) => tab.isActive);
    if (activeIndex !== -1 && navItemsRef.current[activeIndex]) {
      const {
        offsetLeft,
        offsetWidth
      } = navItemsRef.current[selectedIndex];
      setActiveTabStyles({
        left: offsetLeft,
        width: offsetWidth
      });
    }
  }, [selectedIndex]);

  return (
    <nav
      ref={ navRef }
      className={ `${theme}-nav nav flex items-center sticky top-0 justify-between border-b px-2` }
    >
      { /* Navigation Tabs */ }
      { topTabs.map(({
        id,
        label,
        link,
        isActive
      }, i) => {
        const isIntroLink = id === 'intro';
        return (
          <div
            key={ `${id}-key` }
            ref={ (el) => {
              navItemsRef.current[i] = el;
            } }
            className={ `nav-item flex my-auto items-center underline-offset-4 transition-all ${
              isActive ? '' : 'hover:scale-125'
            }` }
          >
            <a
              href={ link }
              className={ isActive ? 'cursor-default' : '' }
              onClick={ () => dispatch(selectByLink({ id })) }
              style={ { scrollBehavior: 'smooth' } }
            >
              { !isIntroLink ? label : <NeekodeIcon theme={ theme } isMobile={ isMobile } /> }
            </a>
          </div>

        );
      }) }

      { /* Settings */ }
      <Settings
        theme={ theme }
        mode={ mode }
        isMobile={ isMobile }
        handleThemeChange={ handleThemeChange }
        handleModeChange={ handleModeChange }
      />

      { /* Custom Animated Underline */ }
      <ChakraBox
        animate={ {
          left: activeTabStyles.left,
          width: activeTabStyles.width
        } }
        transition={ {
          type: 'spring',
          stiffness: 200,
          damping: 20
        } }
        position="absolute"
        bottom="0"
        bg={ colorHexes.accentHex }
        height="4px"
        borderRadius="2px"
      />
    </nav>
  );
}
