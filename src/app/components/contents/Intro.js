'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */
import {
  Center,
  Image,
  Wrap,
  WrapItem,
  useColorModeValue,
  Tooltip,
  Box,
  useTheme,
  useToken,
  Heading
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { getBaseWrapperProps } from '../../../constants';
import AtAGlance from '../modules/AtAGlance';

export default function IntroContent() {
  const theme = useTheme();
  const {
    viewport: { isMobile }
  } = useSelector((state) => state.common);

  // For Divs.
  const colorValues = {
    bgColor: useColorModeValue('brand.200', 'brand.700'),
    accentColor: useColorModeValue('accent.500', 'accent.400'),
    textColor: useColorModeValue('brand.800', 'brand.100')
  };

  // For Widgets
  const colorHexes = {
    textHex: theme.colors.brand[colorValues.textColor.split('.')[1]],
    neutralHex: useToken('colors', 'neutral.300'),
    bgHex: useToken('colors', 'brand.700'),
    darkerBgHex: useToken('colors', 'brand.800')
  };

  // TODO: fun background accent shapes.
  const wrapperProps = getBaseWrapperProps(isMobile);
  return (
    <Wrap
      spacing="8"
      placeContent="center"
    >
      <Wrap
        position="relative"
        width="100%"
        maxWidth="440px"
        boxShadow="lg"
        borderBottom="1px"
        borderRight="1px"
        borderRadius="10"
        borderBottomRightRadius="50"
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        paddingTop={ isMobile ? '12px' : '' }
        paddingBottom={ isMobile ? '12px' : '' }
        marginLeft={ isMobile ? '' : '80px' }
      >
        { !isMobile && <Box minHeight="180px" minWidth="100px" /> }
        <WrapItem
          position={ isMobile ? 'relative' : 'absolute' }
          left={ isMobile ? 'relative' : '-60px' }
        >
          <Image
            borderRadius="full"
            placeSelf="center"
            boxSize="180"
            src="/head-shot-2.jpg"
            alt="intro head shot"
            boxShadow="lg"
            borderBottom="1px"
            borderRight="1px"
            borderColor={ colorValues.accentColor }
          />
        </WrapItem>
        <WrapItem>
          <Center
            width="100%"
            alignSelf="center"
            color={ colorValues.textColor }
          >
            <div className="block items-center">
              <h1>Neeko Blomgren</h1>
              <h2>UI/UX Web Developer</h2>
              <h3>efficiency, simplicity, modernity</h3>
            </div>
          </Center>
        </WrapItem>
      </Wrap>
      <AtAGlance
        colorValues={ colorValues }
        colorHexes={ colorHexes }
        wrapperProps={ wrapperProps }
      />
      <WrapItem
        width={ `${isMobile ? '95%' : '85%'}` }
      >
        <Center
          { ...wrapperProps }
          width="100%"
          bg={ colorValues.bgColor }
          borderColor={ colorValues.accentColor }
          color={ colorValues.textColor }
        >
          <Box
            width="10%"
            marginBottom="auto"
            marginTop="12px"
            marginLeft="12px"
          >
            <Heading
              size="md"
              alignSelf="center"
              textDecoration="underline"
            >
              my story
            </Heading>
          </Box>
          <Wrap padding="4" width="100vw" marginTop="20px">
            <WrapItem width="100%" display="inline">
              It&apos;s built using my preferred stack of NextJS, React, Redux Toolkit, Chakra, and
              Tailwind. It&apos;s split into 3 sections.
            </WrapItem>
            <WrapItem width="100%" display="inline">
              <h4>
                profession -
              </h4>
              { /* TODO: fancy e. */ }
              here you can find a nice UX to expand on the details of my work experience;
              <Tooltip
                hasArrow
                placement="top"
                label="download my resume in PDF from the footer."
              >
                <span className="tooltip">
                  &nbsp;basically a fancier resume.
                </span>
              </Tooltip>
            </WrapItem>
            <WrapItem width="100%" display="inline">
              <h4>
                code -
              </h4>
              interactive code examples with technical explanations to showcase my discipline. comes
              with a coding sandbox.
            </WrapItem>
            <WrapItem width="100%" display="inline">
              <h4>
                projects -
              </h4>
              more details on my personal projects. go there for deep dives on my
              functionality and design, such as the fancy background in this website.
            </WrapItem>
          </Wrap>
        </Center>
      </WrapItem>
    </Wrap>
  );
}
