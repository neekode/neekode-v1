'use client';

import { Flex, WrapItem } from '@chakra-ui/react';
import useCommonState from '../../hooks/common';
import { footerButtons } from '../../../constants';

export default function Footer(props) {
  props;
  const {
    // dispatch,
    // isAppLoading,
    theme
    // handleThemeChange,
    // mode,
    // handleModeChange
  } = useCommonState();

  // TODO: finish this.
  return (
    <Flex
      width="100%"
      placeContent="center"
      padding="8"
      zIndex="500"
      marginTop="4"
      position="relative"
      className={ `${theme}-footer footer` }
    >
      <Flex gap="20">
        { footerButtons.map((button) => {
          return (
            <WrapItem key={ `${button.name}-footer-btn` }>
              { button.icon }
            </WrapItem>
          );
        }) }
      </Flex>
    </Flex>
  );
}
