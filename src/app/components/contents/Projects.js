'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */

import { Center, Wrap, useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import React from 'react';

export default function ProjectsContent() {
  const {
    viewport: { isMobile }
  } = useSelector((state) => state.common);

  // For Divs.
  const bgColor = useColorModeValue('brand.200', 'brand.700');
  const accentColor = useColorModeValue('accent.500', 'accent.400');
  const textColor = useColorModeValue('brand.800', 'brand.100');
  // TODO: fun background accent shapes.
  return (
    <Wrap
      spacing="8"
      placeContent="center"
    >
      <Center
        width="95%"
        minHeight="300px"
        borderBottomLeftRadius="10"
        borderTopRightRadius="10"
        borderBottomRightRadius="10"
        boxShadow="lg"
        borderBottom="1px"
        borderRight="1px"
        display="flex"
        flexDirection={ isMobile ? 'column' : 'row' }
        bg={ bgColor }
        borderColor={ accentColor }
        color={ textColor }
      >
        Projects Page - work in progress
      </Center>
    </Wrap>
  );
}
