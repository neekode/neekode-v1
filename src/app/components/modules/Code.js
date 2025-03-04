import { Heading, Wrap } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DynamicContent from '../widgets/DynamicContent';

export default function Code({
  wrapperProps,
  colorValues,
  colorHexes
}) {
  const {
    viewport: {
      isMobile,
      isTablet
    }
  } = useSelector((state) => state.common);

  // TODO: code segments()
  // const [segments] = useState([]);
  const [activeSegment, setActiveSegment] = useState(null);

  return (
    <AnimatePresence>
      <Wrap
        { ...wrapperProps }
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        color={ colorValues.textColor }
        flexDirection="column-reverse"
      >
        <DynamicContent
          type="code"
          direction="right"
          title="code"
          colorValues={ colorValues }
          colorHexes={ colorHexes }
          isMobile={ isMobile }
          isTablet={ isTablet }
          activeSegment={ activeSegment }
          setActiveSegment={ setActiveSegment }
        />
        <Heading size="sm" placeContent="center" placeSelf="center">COMING SOON!</Heading>

        { /* some notes: */ }

        { /* All of these modules are my own. Beyond things such as wrappers and other abstract */ }
        { /* components from ChakraUI, there are no external packages used on my projects. */ }
        { /* It can lead to them being a little rough around the edges, but */ }
        { /* I believe it is vital to my tech growth to build things myself in my */ }
        { /* personal projects. */ }
        { /* The Background (proud, and built when i was young), the settings, the nav bar, */ }
        { /* and each of the different */ }
        { /* modules on this page are completely of my own design and development. */ }
        { /* Now with prompt engineering I have an AI write the groundwork for */ }
        { /* much of these components as well as have it check my */ }
        { /* work for potential adjustments, */ }
        { /* but of course i'm still writing code to fix it's mistakes, */ }
        { /* ensuring they slot into the application correctly, etc. */ }
        { /* no issues with ADA, checked with aXe */ }
      </Wrap>
    </AnimatePresence>

  );
}
