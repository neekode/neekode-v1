'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */
import React from 'react';
import { SpinnerIcon } from '@chakra-ui/icons';
import { Center } from '@chakra-ui/react';
import useCommonState from '../hooks/common';

export default function Content({ children }) {
  const {
    isAppLoading
  } = useCommonState();

  return (
    <div className="content-height flex justify-center">
      { !isAppLoading ? children
        : (
          <div className="page">
            { /* TODO: why isnt this animating lol.  */ }
            <Center>
              <SpinnerIcon
                height={ 16 }
                width={ 16 }
                color="white"
              />
            </Center>
          </div>
        ) }
    </div>
  );
}
