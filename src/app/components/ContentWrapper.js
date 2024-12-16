'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>. */
import React, { useEffect, useState, useRef } from 'react';
import { Box, Center, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsTabActive, setIsTabLoaded } from '../../redux/slices/nav';

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
  const dispatch = useDispatch();
  const {
    loading: { app: isAppLoading }
  } = useSelector((state) => state.common);
  const {
    topTabs
  } = useSelector((state) => state.nav);

  const [isContentReady, setIsContentReady] = useState(false);
  const containerRef = useRef(null);
  // Profile picture content should be treated the same as intro nav tab
  const correspondingTab = section.id !== 'profile-picture' ? topTabs.find((tab) => tab.id === section.id) : topTabs[0];

  /**
   * useEffect - Watches for user "entering" the component via scroll.
   * (Started by AI)
   * Sets nav state depending on corresponding content that is currently scrolled over.
   */
  useEffect(() => {
    if (!isAppLoading) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsContentReady(true);
            if (!correspondingTab.isLoaded) {
              dispatch(setIsTabLoaded({ id: section.id }));
            }
            dispatch(setIsTabActive({
              id: section.id,
              isActive: true
            }));
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
    }
  }, [isAppLoading]);

  return (
    <Box
      id={ section.id }
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
