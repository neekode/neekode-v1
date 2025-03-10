import { Wrap, WrapItem } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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
      isTablet
    }
  } = useSelector((state) => state.common);

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
          activeSegment={ activeSegment }
          setActiveSegment={ setActiveSegment }
          isMobile={ isMobile }
          isTablet={ isTablet }
        />
        <WrapItem
          width={ isMobile || isTablet ? '100%' : '59%' }
          gap={ isMobile ? '16px' : '' }
          flexDirection="column"
          padding={ isMobile ? '12px' : '24px' }
          alignItems="center"
          placeContent="center"
        >
          <Wrap>
            { sections.map(({
              header,
              segments
            }) => (
              <WrapItem
                maxW={ isMobile ? '25%' : '30%' }
                key={ `${header}-key` }
                display="flex"
                flexDirection="column"
                alignItems="center"
                alignSelf="center"
                fontSize={ isMobile ? '14px' : '20px' }
                flexWrap={ isMobile || isTablet ? 'wrap-reverse' : '' }
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
