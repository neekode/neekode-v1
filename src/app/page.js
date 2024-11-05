import React from 'react';
import IntroContent from './components/contents/Intro';
import ProfessionContent from './components/contents/Profession';
import CodeContent from './components/contents/Code';
import ProjectsContent from './components/contents/Projects';
import ContentWrapper from './components/ContentWrapper';

export const metadata = {
  title: 'intro - neekode'
};

/**
 * Main -
 * This component acts as the primary wrapper for all inner content of the application.
 * This drives our "full-page-scroll" functionality.
 */

const appSections = [
  {
    component: <IntroContent />,
    label: 'Intro'
  },
  {
    component: <ProfessionContent />,
    label: 'Profession'
  },
  {
    component: <CodeContent />,
    label: 'Code'
  },
  {
    component: <ProjectsContent />,
    label: 'Projects'
  }
];

export default function Main() {
  return (
    <div>
      { appSections.map((section) => {
        return (
          <ContentWrapper key={ `${section.label}-wrapper` } section={ section }>
            { section.component }
          </ContentWrapper>
        );
      }) }
    </div>
  );
}
