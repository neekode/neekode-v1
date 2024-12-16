'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */
import { Flex, useTheme } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import React from 'react';
import { contentContainerStyles, getBaseWrapperProps } from '../../../constants';
import MyStory from '../modules/MyStory';

export default function ProjectsContent() {
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
      <MyStory
        theme={ theme }
        colorValues={ colorValues }
        colorHexes={ colorHexes }
        wrapperProps={ getBaseWrapperProps(isMobile, isTablet, 'left') }
      />
    </Flex>
  );
}
