'use client';

import { WrapItem } from '@chakra-ui/react';
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
    <div
      className={ `${theme}-footer footer flex items-center bottom-0 relative justify-between border-t px-4 py-2` }
    >
      { footerButtons.map((button) => {
        return (
          <WrapItem key={ `${button.name}-footer-btn` }>
            { button.icon }
          </WrapItem>
        );
      }) }
    </div>
  );
}
