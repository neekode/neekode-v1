'use client';

import { Wrap } from '@chakra-ui/react';
import useCommonState from '../../hooks/common';

export default function Footer(props) {
  const {} = props;
  const {
    // dispatch,
    // isAppLoading,
    theme
    // handleThemeChange,
    // mode,
    // handleModeChange
  } = useCommonState();

  // const bgColor = useColorModeValue('brand.200', 'brand.700');
  // const textColor = useColorModeValue('brand.800', 'brand.100');

  return (
    <div
      className={ `${theme}-footer footer flex items-center bottom-0 relative justify-between border-t px-4 py-2` }
    >
      <Wrap>
        Im a footer!
      </Wrap>
    </div>
  );
}
