import { Box, Heading, ListItem, UnorderedList, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionedShape from '../widgets/SectionedShape';
import { processSegments, experienceSegments, toolsSegments } from '../../../constants';
import TapMeIcon from '../svgs/TapMeIcon';

export default function AtAGlance({
  wrapperProps,
  colorValues,
  colorHexes
}) {
  const [activeSegment, setActiveSegment] = useState(null);
  const [sections] = useState([
    {
      header: 'Experience',
      segments: experienceSegments
    },
    {
      header: 'My Toolbox',
      segments: toolsSegments
    },
    {
      header: 'Process',
      segments: processSegments
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
      }, 30000);
    }
    return () => clearTimeout(timeoutId);
  }, [activeSegment]);

  // TODO: webstorm breakpoints and devtools integration
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
          <Heading
            fontSize="2xl"
            alignSelf="center"
            marginBottom="2"
            marginTop="2"
          >
            { activeSegment
              ? activeSegment.header
              : 'at a glance' }
          </Heading>
          <Box
            h="100%"
            minH="150px"
            minW={ isMobile || isTablet ? '100vw' : '280px' }
            maxW={ isMobile ? '' : '120px' }
            alignContent={ !activeSegment ? 'center' : 'flexStart' }
            fontSize="16px"
            padding="2"
            fontStyle={ activeSegment ? '' : 'italic' }
            borderColor={ colorValues.accentColor }
            boxShadow="2xl"
            borderBottomLeftRadius="10"
            borderTopRightRadius="10"
            borderBottomRightRadius="100"
            borderRight="1px"
            borderTop="1px"
            style={ {
              textAlign: '-webkit-center'
            } }
          >
            { /* Here, we determine if there is an activeSegment, if there is we check
            if that segment's constant has a bullets array property. If not, we back
             into the description property instead.
             */ }
            { /* TODO: replace with CTA icon */ }
            {
              activeSegment
                ? (activeSegment.bullets
                  ? (
                    <UnorderedList>
                      { /* todo: get rid of this dumbass eslint issue with
                            using indexes as ids. */ }
                      { activeSegment.bullets.map((bullet, i) => (
                        <ListItem
                          // eslint-disable-next-line react/no-array-index-key
                          key={ `${activeSegment.id}-bullet-${i}` }
                          marginLeft="4"
                          marginBottom="2"
                          textAlign="left"
                        >
                          { bullet }
                        </ListItem>
                      )) }
                    </UnorderedList>
                  ) : <div>{ activeSegment.description }</div>
                ) : <TapMeIcon rotate={ 45 } />
            }
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
                flexWrap={ isMobile ? 'wrap-reverse' : '' }
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
