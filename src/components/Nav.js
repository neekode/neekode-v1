'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Switch } from '@chakra-ui/react';
import useCommonState from '../hooks/common';
import neekodeIcon from '../../public/neekode-icon.svg';
import { setTheme } from '../redux/slices/common';
import NeekodeIcon from './svgs/NeekodeIcon';

const navButtons = [
  {
    name: 'home'
  },
  {
    name: 'profession'
  },
  {
    name: 'works'
  },
  {
    name: 'contact'
  }
];

export default function Nav() {
  const {
    dispatch,
    theme,
    mode
  } = useCommonState();

  const isDark = theme === 'dark';
  return (
    <nav className={ `${theme}-theme ${mode}-mode flex justify-between border-b px-8` }>
      <div className="my-auto">
        <Link href="/">
          { /* <Image */ }
          { /*   priority */ }
          { /*   src={ neekodeIcon } */ }
          { /*   alt="Home Link & Brand" */ }
          { /*   className={ theme } */ }
          { /*   width={ 64 } */ }
          { /* /> */ }
          <NeekodeIcon isDark={ isDark } />
        </Link>
      </div>
      <div className="my-auto">
        <Link href="/contact">
          contact
        </Link>
      </div>
      <div className="my-auto">
        <Link href="/profession">
          profession
        </Link>
      </div>
      <div className="my-auto">
        <Link href="/works">
          works
        </Link>
      </div>
      <div className="my-auto">
        <Switch
          defaultChecked={ isDark }
          colorScheme="teal"
          onChange={ () => dispatch(setTheme(isDark ? 'light' : 'dark')) }
        />
      </div>
    </nav>
  );
}
