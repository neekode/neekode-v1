import { Box, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { useState } from 'react';
import SectionedShape from '../widgets/SectionedShape';
import { processSegments, experienceSegments, toolsSegments } from '../../../constants';

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
      header: 'Tools',
      segments: toolsSegments
    },
    {
      header: 'Process',
      segments: processSegments
    }
  ]);

  return (
    <WrapItem
      width="100%"
      maxWidth="90vw"
      placeContent="center"
    >
      <Wrap
        { ...wrapperProps }
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        color={ colorValues.textColor }
      >
        { /* TODO: some styling here. */ }
        <WrapItem
          padding="12px"
          textAlign="center"
          flexDirection="column"
          // height="100%"
          // borderRight="1px"
          // borderRightColor={ accentColor }
        >
          <Heading
            size="md"
            alignSelf="center"
            textDecoration="underline"
          >
            at a glance
          </Heading>
          <Box
            h="100%"
            maxW="120px"
            alignContent="center"
            fontStyle="italic"
          >
            {
              activeSegment ? activeSegment.description : 'Tap/Hover for Details'
            }
          </Box>
        </WrapItem>
        <WrapItem
          flexDirection="column"
          paddingTop="16px"
          paddingLeft="20px"
          paddingRight="40px"
          marginTop="16px"
          marginBottom="auto"
          placeContent="center"
        >
          <Wrap spacing="64px">
            { sections.map(({
              header,
              segments
            }) => (
              <WrapItem
                key={ `${header}-key` }
                display="flex"
                flexDirection="column"
                gap="12px"
                alignItems="center"
              >
                { header }
                <SectionedShape
                  segments={ segments }
                  textColor={ colorHexes.textHex }
                  shapeColor={ colorHexes.neutralHex }
                  lineColor={ colorHexes.bgHex }
                  activeSegment={ activeSegment }
                  setActiveSegment={ setActiveSegment }
                />
              </WrapItem>
            )) }
          </Wrap>
        </WrapItem>
      </Wrap>
    </WrapItem>
  );
}
