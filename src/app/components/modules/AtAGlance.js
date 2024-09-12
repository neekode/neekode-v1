import { Box, Heading, ListItem, UnorderedList, Wrap, WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionedShape from '../widgets/SectionedShape';
import {
  getProcessSegments,
  getExperienceSegments,
  getToolsSegments,
  fadeAnimation
} from '../../../constants';
import TapMeIcon from '../svgs/TapMeIcon';

// Create motion components from Chakra components
const MotionUnorderedList = motion(UnorderedList);
const MotionHeading = motion(Heading);

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
      }, 60000);
    }
    return () => clearTimeout(timeoutId);
  }, [activeSegment]);

  return (
    <WrapItem
      width="100%"
      margin="1"
      placeContent="center"
    >
      <Wrap
        { ...wrapperProps }
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        color={ colorValues.textColor }
      >
        { /* TODO: how do i put a small fade here? also on the inner icons. */ }
        <WrapItem
          textAlign="center"
          flexDirection="column"
          minHeight={ isMobile || isTablet ? '280px' : '360px' }
        >
          <MotionHeading
            fontSize="2xl"
            alignSelf="center"
            marginBottom="2"
            marginTop="2"
            { ...fadeAnimation }
            key={ activeSegment ? activeSegment.header : 'at-a-glance' }
          >
            { activeSegment ? activeSegment.header : 'at a glance' }
          </MotionHeading>
          { /* Content Box fade effect */ }
          <Box
            h="100%"
            minH="150px"
            minW={ isMobile || isTablet ? '100vw' : '280px' }
            maxW={ isMobile || isTablet ? '' : '120px' }
            alignContent={ !activeSegment ? 'center' : 'flexStart' }
            fontSize="16px"
            padding="2"
            fontStyle={ activeSegment ? '' : 'italic' }
            borderColor={ colorValues.accentColor }
            boxShadow="2xl"
            borderBottomLeftRadius="10"
            borderTopRightRadius="10"
            borderBottomRightRadius={ isMobile || isTablet ? '30' : '100' }
            borderRight="1px"
            borderTop="1px"
            style={ {
              textAlign: '-webkit-center'
            } }
            key={ activeSegment ? `${activeSegment.id}-box` : 'default-box' }
          >
            { activeSegment
              ? (activeSegment.bullets
                ? (
                  <MotionUnorderedList
                    { ...fadeAnimation }
                    maxW={ isMobile || isTablet ? '720px' : '' }
                    fontSize={ isMobile || isTablet ? '18px' : '' }
                  >
                    { activeSegment.bullets.map((bullet, i) => (
                      <ListItem
                        // eslint-disable-next-line
                          key={`${activeSegment.id}-bullet-${i}`}
                        marginLeft="4"
                        marginBottom="2"
                        textAlign="left"
                      >
                        { bullet }
                      </ListItem>
                    )) }
                  </MotionUnorderedList>
                ) : <div>{ activeSegment.description }</div>
              ) : (
                <TapMeIcon
                  colorHexes={ colorHexes }
                  rotate={ isMobile || isTablet ? 180 : 45 }
                />
              ) }
          </Box>
        </WrapItem>
        <WrapItem
          flexDirection="column"
          padding="6"
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
              >
                <SectionedShape
                  isMobile={ isMobile }
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
    </WrapItem>
  );
}
