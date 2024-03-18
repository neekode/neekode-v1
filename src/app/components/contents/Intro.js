'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */

import { Center, Image, Wrap, WrapItem, useColorModeValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function IntroContent() {
  const {
    viewport: { isMobile }
  } = useSelector((state) => state.common);

  // For Divs.
  const bgColor = useColorModeValue('brand.200', 'brand.700');
  const accentColor = useColorModeValue('accent.500', 'accent.400');
  const textColor = useColorModeValue('brand.800', 'brand.100');
  return (
    <Wrap
      spacing="4"
      placeContent="center"
    >
      <WrapItem>
        <Center borderRadius="10">
          <Image
            borderRadius="full"
            placeSelf="center"
            boxSize="180"
            src="/head-shot-2.jpg"
            alt="intro head shot"
            boxShadow="lg"
            border="1px"
            borderColor={ accentColor }
          />
        </Center>
      </WrapItem>
      <WrapItem
        width="100%"
        maxWidth="500px"
      >
        <Center
          width="100%"
          h="180px"
          alignSelf="center"
          borderRadius="10"
          boxShadow="lg"
          border="1px"
          bg={ bgColor }
          borderColor={ accentColor }
          color={ textColor }
        >
          Box 2
        </Center>
      </WrapItem>
      <WrapItem
        width="100%"
      >
        <Center
          width="100%"
          height="640px"
          borderRadius="10"
          boxShadow="lg"
          border="1px"
          bg={ bgColor }
          borderColor={ accentColor }
          color={ textColor }
        >
          Box 3
        </Center>
      </WrapItem>
      <WrapItem
        width={ `${isMobile ? '100%' : '48%'}` }
      >
        <Center
          width="100%"
          height="180px"
          borderRadius="10"
          boxShadow="lg"
          border="1px"
          bg={ bgColor }
          borderColor={ accentColor }
          color={ textColor }
        >
          Box 3
        </Center>
      </WrapItem>
      <WrapItem
        width={ `${isMobile ? '100%' : '48%'}` }
      >
        <Center
          width="100%"
          height="180px"
          borderRadius="10"
          boxShadow="lg"
          border="1px"
          bg={ bgColor }
          borderColor={ accentColor }
          color={ textColor }
        >
          Box 3
        </Center>
      </WrapItem>
    </Wrap>
  );
}
