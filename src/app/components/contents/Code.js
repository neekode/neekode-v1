'use client';

/* This layout is the wrapper for all the content of each specific module. Siblings with <Nav/>.  */
import { Flex, useTheme, Wrap } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import React from 'react';
import { contentContainerStyles, getBaseWrapperProps } from '../../../constants';
import Code from '../modules/Code';

export default function CodeContent() {
  const theme = useTheme();
  const {
    colorValues,
    colorHexes,
    viewport: {
      isMobile,
      isTablet
    }
  } = useSelector((state) => state.common);

  return (
    <Flex { ...contentContainerStyles }>
      <Code
        theme={ theme }
        colorValues={ colorValues }
        colorHexes={ colorHexes }
        wrapperProps={ getBaseWrapperProps(isMobile, isTablet, 'right') }
      />
    </Flex>
  );
}
