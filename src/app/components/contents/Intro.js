'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */
import {
  useColorModeValue,
  useTheme,
  useToken,
  Flex
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { contentContainerStyles, getBaseWrapperProps } from '../../../constants';
import AtAGlance from '../modules/AtAGlance';
import ProfilePicture from '../modules/ProfilePicture';

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
    <Flex { ...contentContainerStyles }>
      <ProfilePicture
        colorValues={ colorValues }
        isMobile={ isMobile }
      />
      <AtAGlance
        theme={ theme }
        colorValues={ colorValues }
        colorHexes={ colorHexes }
        wrapperProps={ getBaseWrapperProps(isMobile, 'right') }
      />
    </Flex>
  );
}
