'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */
import { Center, Wrap, useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import React from 'react';
import { getBaseWrapperProps } from '../../../constants';

export default function ProfessionContent() {
  const {
    viewport: { isMobile }
  } = useSelector((state) => state.common);

  // For Divs.
  const bgColor = useColorModeValue('brand.200', 'brand.700');
  const accentColor = useColorModeValue('accent.500', 'accent.400');
  const textColor = useColorModeValue('brand.800', 'brand.100');
  const wrapperProps = getBaseWrapperProps(isMobile);

  return (
    <Wrap
      spacing="8"
      placeContent="center"
    >
      <Center
        { ...wrapperProps }
        bg={ bgColor }
        borderColor={ accentColor }
        color={ textColor }
      >
        Profession Page - work in progress
      </Center>
    </Wrap>
  );
}
