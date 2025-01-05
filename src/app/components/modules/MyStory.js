import { Wrap } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DynamicContent from '../widgets/DynamicContent';
import Timeline from '../widgets/Timeline';
import { getTimelineSegments } from '../../../constants';

export default function MyStory({
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

  const [segments] = useState(getTimelineSegments());
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
        <Timeline
          isMobile={ isMobile }
          isTablet={ isTablet }
          textColor={ colorHexes.textHex }
          shapeColor={ colorHexes.neutralHex }
          shadowColor={ colorHexes.darkerBgHex }
          segments={ segments }
          activeSegment={ activeSegment }
          setActiveSegment={ setActiveSegment }
        />
        <DynamicContent
          type="my-story"
          direction="left"
          title="my story"
          colorValues={ colorValues }
          colorHexes={ colorHexes }
          isMobile={ isMobile }
          isTablet={ isTablet }
          activeSegment={ activeSegment }
          setActiveSegment={ setActiveSegment }
        />
      </Wrap>
    </AnimatePresence>

  );
}
