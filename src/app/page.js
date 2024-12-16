'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import IntroContent from './components/contents/Intro';
import MyStoryContent from './components/contents/MyStory';
import CodeContent from './components/contents/Code';
import ProjectsContent from './components/contents/Projects';
import ContentWrapper from './components/ContentWrapper';
import ProfilePicture from './components/modules/ProfilePicture';

/**
 * Main -
 * This component acts as the primary wrapper for all inner content of the application.
 * This drives our "full-page-scroll" functionality.
 */

export default function Main() {
  const {
    viewport: {
      height,
      isMobile,
      isTablet
    }
  } = useSelector((state) => state.common);

  const [appSections, setAppSections] = useState([]);

  /**
   * useEffect - Shift in MobilePage Sections
   * In mobile and tablet resolutions, we shift the profile picture
   * component to be a full content section.
   */
  useEffect(() => {
    // Define the base sections without the profile picture.
    const baseSections = [
      {
        component: <IntroContent />,
        label: 'Intro',
        id: 'intro'
      },
      {
        component: <MyStoryContent />,
        label: 'My Story',
        id: 'my-story'
      },
      {
        component: <CodeContent />,
        label: 'Code',
        id: 'code'
      },
      {
        component: <ProjectsContent />,
        label: 'Projects',
        id: 'projects'
      }
    ];

    // If on mobile, add the Profile Picture section at the start.
    const newAppSections = isMobile || isTablet || height < 600
      ? [{
        component: <ProfilePicture isMobile={ isMobile } />,
        label: 'Profile Picture',
        id: 'profile-picture'
      }, ...baseSections]
      : baseSections;

    // Update the app sections with the new layout.
    setAppSections(newAppSections);
  }, [isMobile, isTablet]);

  return appSections.length && appSections.map((section) => {
    return (
      <ContentWrapper key={ `${section.label}-wrapper` } section={ section }>
        { section.component }
      </ContentWrapper>
    );
  });
}
