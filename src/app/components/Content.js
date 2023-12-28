'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */

import useCommonState from '../hooks/common';

export default function Content({ children }) {
  const {
    isAppLoading
  } = useCommonState();

  return (
    <div className="content-height flex justify-center">
      { !isAppLoading ? children
        : (
          <div className="page">Loading...</div>
        ) }
    </div>
  );
}