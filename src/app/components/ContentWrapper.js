'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>. */
import React, { useEffect, useState, useRef } from 'react';
import { Box, Center, Spinner } from '@chakra-ui/react';

// TODO: finish this!!! looking awesome though. gotta figure out
//  the best "spot" to put the actual scroll trigger.
//      also it kind of looks like there's some performance
//      fuckery going on with the background animation.
//      when scrolling, it redraws a bunch it looks like?
// bg={ index % 2 === 0 ? 'gray.700' : 'gray.800' }
// Alternating background colors for visual separation
export default function ContentWrapper({
  children,
  section
}) {
  const [isContentReady, setIsContentReady] = useState(false);
  const containerRef = useRef(null);

  /**
   * useEffect - Watches for user "entering" the component via scroll.
   * (Started by AI)
   * TODO: use this in other ways. we want to tie the "nav" to this
   * state so as to watch for which component
   *   is currently scrolled over. Then we can set the state of the Nav.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentReady(true);
          observer.disconnect(); // Stop observing once content is ready
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <Box
      ref={ containerRef }
      key={ `${section.label}-box` }
      className="page"
      height="100vh"
      scrollSnapAlign="start"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      { isContentReady ? (
        children
      ) : (
        <Center>
          <Spinner />
        </Center>
      ) }
    </Box>
  );
}
