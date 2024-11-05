import { Wrap, WrapItem } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionedShape from '../widgets/SectionedShape';
import {
  getProcessSegments,
  getExperienceSegments,
  getToolsSegments
} from '../../../constants';
import DynamicContent from '../widgets/DynamicContent';

export default function AtAGlance({
  wrapperProps,
  colorValues,
  colorHexes
}) {
  const [activeSegment, setActiveSegment] = useState(null);
  const [sections] = useState([
    {
      header: 'Experience',
      segments: getExperienceSegments({ colorHexes })
    },
    {
      header: 'My Toolbox',
      segments: getToolsSegments({ colorHexes })
    },
    {
      header: 'Process',
      segments: getProcessSegments({ colorHexes })
    }
  ]);

  const {
    viewport: {
      isMobile,
      isTablet,
      width
    }
  } = useSelector((state) => state.common);

  /**
   * useEffect - Reset Active Segment After Timeout
   * This useEffect automatically resets the active segment to null after 30 seconds,
   * which resets it back to its default state.
   */
  useEffect(() => {
    let timeoutId;
    if (activeSegment !== null) {
      timeoutId = setTimeout(() => {
        setActiveSegment(null);
      }, 120000);
    }
    return () => clearTimeout(timeoutId);
  }, [activeSegment]);

  const hasWrapped = width < 1540;

  return (
    <AnimatePresence>
      <Wrap
        { ...wrapperProps }
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        color={ colorValues.textColor }
      >
        <DynamicContent
          type="at-a-glance"
          direction="right"
          title="at a glance"
          colorValues={ colorValues }
          colorHexes={ colorHexes }
          isMobile={ isMobile }
          hasWrapped={ hasWrapped }
          activeSegment={ activeSegment }
        />
        <WrapItem
          flexDirection="column"
          padding="24px"
          placeContent="center"
        >
          <Wrap>
            { sections.map(({
              header,
              segments
            }) => (
              <WrapItem
                key={ `${header}-key` }
                display="flex"
                flexDirection="column"
                alignItems="center"
                flexWrap={ isMobile || isTablet ? 'wrap-reverse' : '' }
                maxW="400px"
              >
                <SectionedShape
                  isMobile={ isMobile }
                  isTablet={ isTablet }
                  segments={ segments }
                  textColor={ colorHexes.textHex }
                  shapeColor={ colorHexes.neutralHex }
                  shadowColor={ colorHexes.darkerBgHex }
                  activeSegment={ activeSegment }
                  setActiveSegment={ setActiveSegment }
                />
                { header }
              </WrapItem>
            )) }
          </Wrap>
        </WrapItem>
      </Wrap>
    </AnimatePresence>
  );
}
