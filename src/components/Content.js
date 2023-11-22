'use client';

/* This layout acts as the primary container for the application.
It's connected to common hooks, wraps around each page, and renders a loader when...  */
import useCommonState from '../hooks/common';

export default function Content({ children }) {
  const {
    isAppLoading
  } = useCommonState();

  return (
    !isAppLoading
      ? (
        <div className="content-height flex justify-center">
          { children }
        </div>
      )
      : (
        <div className="h-full flex m-auto">
          App is Loading...
        </div>
      )
  );
}
