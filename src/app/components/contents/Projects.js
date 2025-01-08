'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */
import { Flex, Wrap } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import React from 'react';
import { contentContainerStyles, getBaseWrapperProps } from '../../../constants';

export default function ProjectsContent() {
  const {
    colorValues,
    viewport: {
      isMobile,
      isTablet
    }
  } = useSelector((state) => state.common);

  return (
    <Flex { ...contentContainerStyles }>
      <Wrap
        { ...getBaseWrapperProps(isMobile, isTablet, 'left') }
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        color={ colorValues.textColor }
      >
        Coming Soon!
      </Wrap>
    </Flex>
  );
}
