'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */
import {
  Center,
  Image,
  Wrap,
  WrapItem,
  useColorModeValue,
  Box,
  useTheme,
  useToken,
  Flex
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getBaseWrapperProps } from '../../../constants';
import AtAGlance from '../modules/AtAGlance';
import MyStory from '../modules/MyStory';

export default function IntroContent() {
  const theme = useTheme();
  const {
    viewport: { isMobile }
  } = useSelector((state) => state.common);

  // TODO: move these into redux?
  // Color Values Selected Based on Color Mode.
  const colorValues = {
    textColor: useColorModeValue('brand.800', 'brand.100'),
    iconColor: useColorModeValue('brand.700', 'brand.200'),
    bgColor: useColorModeValue('brand.200', 'brand.700'),
    neutralColor: useColorModeValue('neutral.500', 'neutral.300'),
    accentColor: useColorModeValue('accent.500', 'accent.400')
  };

  // Colors Converted to Hex Values based on above, as well as extra colors.
  const colorHexes = {
    textHex: theme.colors.brand[colorValues.textColor.split('.')[1]],
    iconHex: theme.colors.brand[colorValues.iconColor.split('.')[1]],
    bgHex: theme.colors.brand[colorValues.bgColor.split('.')[1]],
    neutralHex: theme.colors.brand[colorValues.neutralColor.split('.')[1]],
    darkerBgHex: useToken('colors', 'brand.800')
  };

  return (
    <Flex
      placeContent="center"
      gap="24px"
      marginTop="24px"
      direction="column"
      alignSelf="center"
    >
      <Wrap
        position="relative"
        width="100%"
        maxWidth="440px"
        boxShadow="lg"
        borderBottom="1px"
        borderRight="1px"
        borderRadius="10"
        borderBottomRightRadius="50"
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        paddingTop={ isMobile ? '12px' : '' }
        paddingBottom={ isMobile ? '12px' : '' }
        marginLeft={ isMobile ? '' : '80px' }
      >
        { !isMobile && <Box minHeight="180px" minWidth="100px" /> }
        <WrapItem
          position={ isMobile ? 'relative' : 'absolute' }
          left={ isMobile ? 'relative' : '-60px' }
        >
          <Image
            borderRadius="full"
            placeSelf="center"
            boxSize="180"
            src="/head-shot-2.jpg"
            alt="intro head shot"
            boxShadow="lg"
            borderBottom="1px"
            borderRight="1px"
            borderColor={ colorValues.accentColor }
          />
        </WrapItem>
        <WrapItem>
          <Center
            width="100%"
            alignSelf="center"
            color={ colorValues.textColor }
          >
            <div className="block items-center">
              <h1>Neeko Blomgren</h1>
              <h2>UI/UX Web Developer</h2>
              <h3>efficiency, simplicity, modernity</h3>
            </div>
          </Center>
        </WrapItem>
      </Wrap>
      { /* First Section */ }
      <AtAGlance
        theme={ theme }
        colorValues={ colorValues }
        colorHexes={ colorHexes }
        wrapperProps={ getBaseWrapperProps(isMobile, 'right') }
      />
      { /* Second Section */ }
      <MyStory
        theme={ theme }
        colorValues={ colorValues }
        colorHexes={ colorHexes }
        wrapperProps={ getBaseWrapperProps(isMobile, 'left') }
      />
    </Flex>
  );
}
