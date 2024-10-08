import { Box, Heading, ListItem, UnorderedList, Wrap, WrapItem } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionedShape from '../widgets/SectionedShape';
import {
  getProcessSegments,
  getExperienceSegments,
  getToolsSegments,
  fadeAnimation,
  headingVariants,
  getListVariantsReveal,
  getListItemVariantsReveal
} from '../../../constants';
import TapMeIcon from '../svgs/TapMeIcon';

// Create motion components from Chakra components
const MotionUnorderedList = motion(UnorderedList);
const MotionListItem = motion(ListItem);
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

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
    <AnimatePresence>
      <Wrap
        { ...wrapperProps }
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        color={ colorValues.textColor }
      >
        <WrapItem
          textAlign="center"
          flexDirection="column"
          minHeight={ isMobile || isTablet ? '280px' : '500spx' }
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
          <Box
            minH={ isMobile || isTablet ? '360px' : '500px' }
            minW={ isMobile || isTablet ? '300px' : '400px' }
            maxW={ isMobile ? '' : '400px' }
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
            display="flex"
            flexDirection="column"
            gap="12px"
            alignItems={ activeSegment ? '' : 'center' }
            placeContent={ isMobile || isTablet ? 'center' : 'center' }
            overflow="hidden"
            style={ {
              textAlign: '-webkit-center'
            } }
            key={ activeSegment ? `${activeSegment.id}-box` : 'default-box' }
          >
            { activeSegment
              ? (activeSegment.bullets
                ? (
                  <Box
                    gap="3"
                  >
                    <MotionHeading
                      variants={ headingVariants }
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      fontStyle="italic"
                      size="xs"
                      marginBottom="12px"
                    >
                      { activeSegment.subheader }
                    </MotionHeading>
                    <MotionUnorderedList
                      variants={ getListVariantsReveal() }
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      maxW={ isMobile || isTablet ? '720px' : '' }
                      fontSize="18px"
                      key={ `${activeSegment?.id}-list` }
                      placeSelf="center"
                    >
                      { activeSegment.bullets.map((bullet) => (
                        <MotionListItem
                          variants={ getListItemVariantsReveal() }
                          key={ bullet.id }
                          marginLeft="4"
                          marginBottom="8px"
                          textAlign="left"
                        >
                          { bullet.text }
                        </MotionListItem>
                      )) }
                    </MotionUnorderedList>
                  </Box>
                ) : <div>{ activeSegment.description }</div>
              ) : (
                <MotionBox { ...fadeAnimation }>
                  <TapMeIcon
                    colorHexes={ colorHexes }
                    rotate={ isMobile || isTablet ? 180 : 45 }
                  />
                </MotionBox>
              ) }
          </Box>
        </WrapItem>
        <WrapItem
          flexDirection="column"
          padding="1"
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
