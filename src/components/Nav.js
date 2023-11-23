'use client';

// External
import Link from 'next/link';
import { Switch } from '@chakra-ui/react';
// In-app
import useCommonState from '../hooks/common';
import NeekodeIcon from './svgs/NeekodeIcon';
import { nav } from '../constants';

export default function Nav() {
  const {
    theme,
    handleThemeChange
    // mode
  } = useCommonState();

  // ${theme}-theme ${mode}-mode
  return (
    <nav
      className="flex justify-between border-b px-4"
    >
      { /* Mapping from nav constant for all nav buttons. */ }
      { nav.map(({ name }) => {
        const isIntroLink = name === 'intro';
        return (
          <div key={ `${name}-key` } className="my-auto ">
            <Link href={ `/${!isIntroLink ? name : ''}` }>
              { !isIntroLink ? name : <NeekodeIcon theme={ theme } /> }
            </Link>
          </div>
        );
      }) }
      <div className="my-auto">
        <Switch
          // defaultChecked={ !isDark }
          // colorScheme="blackAlpha"
          onChange={ handleThemeChange }
        />
      </div>
    </nav>
  );
}
