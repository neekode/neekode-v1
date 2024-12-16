'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */
import {
  useTheme,
  Flex
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { contentContainerStyles, getBaseWrapperProps } from '../../../constants';
import AtAGlance from '../modules/AtAGlance';
import ProfilePicture from '../modules/ProfilePicture';

export default function IntroContent() {
  const theme = useTheme();
  const {
    colorValues,
    colorHexes,
    viewport: {
      height,
      isMobile,
      isTablet
    }
  } = useSelector((state) => state.common);

  return (
    <Flex { ...contentContainerStyles }>
      { !isMobile && !isTablet && height > 600
        && (
          <ProfilePicture
            isInner
            colorValues={ colorValues }
            isMobile={ isMobile }
          />
        ) }
      <AtAGlance
        theme={ theme }
        colorValues={ colorValues }
        colorHexes={ colorHexes }
        wrapperProps={ getBaseWrapperProps(isMobile, isTablet, 'right') }
      />
    </Flex>
  );
}
