'use client';

// External
import Link from 'next/link';
import { Switch } from '@chakra-ui/react';
// In-app
import { useSelector } from 'react-redux';
import NeekodeIcon from './svgs/NeekodeIcon';
import useCommonState from '../hooks/common';
import useNavState from '../hooks/nav';

export default function F({ router }) {
  const {
    theme,
    handleThemeChange
    // mode
  } = useCommonState();

  useNavState({ router });

  const {
    tabs
  } = useSelector((state) => state.nav);

  return (
    <nav
      className="flex items-center justify-between border-b px-4 py-2"
    >
      { /* Mapping from nav constant for all nav buttons. */ }
      { tabs.map(({
        name,
        route,
        selected
      }) => {
        const isIntroLink = name === 'intro';
        return (
          <div
            key={ `${name}-key` }
            className={ `my-auto hover:underline ${selected ? ' underline' : ''}` }
          >
            <Link href={ route }>
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
