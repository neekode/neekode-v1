import { Wrap } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DynamicContent from '../widgets/DynamicContent';
import Timeline from '../widgets/Timeline';

export default function MyStory({
  wrapperProps,
  colorValues,
  colorHexes
}) {
  const {
    viewport: {
      isMobile,
      width
    }
  } = useSelector((state) => state.common);

  // , setActiveSegment
  const [activeSegment] = useState(null);
  const hasWrapped = width < 1540;

  return (
    <AnimatePresence>
      <Wrap
        { ...wrapperProps }
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        color={ colorValues.textColor }
        flexDirection={ hasWrapped ? 'column-reverse' : '' }
      >
        <Timeline />
        <DynamicContent
          type="my-story"
          direction="left"
          title="my story"
          colorValues={ colorValues }
          colorHexes={ colorHexes }
          isMobile={ isMobile }
          hasWrapped={ hasWrapped }
          activeSegment={ activeSegment }
        />
      </Wrap>
    </AnimatePresence>

  );
}
