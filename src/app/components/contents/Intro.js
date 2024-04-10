'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */

import { Center, Image, Wrap, WrapItem, useColorModeValue, Tooltip, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function IntroContent() {
  const {
    viewport: { isMobile }
  } = useSelector((state) => state.common);

  // For Divs.
  const bgColor = useColorModeValue('brand.200', 'brand.700');
  const accentColor = useColorModeValue('accent.500', 'accent.400');
  const textColor = useColorModeValue('brand.800', 'brand.100');
  // TODO: fun background accent shapes.
  return (
    <Wrap
      spacing="8"
      placeContent="center"
    >
      { /* <WrapItem> */ }
      { /*    */ }
      { /* </WrapItem> */ }
      <Wrap
        position="relative"
        width="100%"
        maxWidth="400px"
        boxShadow="lg"
        borderBottom="1px"
        borderRight="1px"
        borderRadius="10"
        bg={ bgColor }
        borderColor={ accentColor }
        paddingTop={ isMobile ? '12px' : '' }
        paddingBottom={ isMobile ? '12px' : '' }
        marginLeft={ isMobile ? '' : '80px' }
      >
        { !isMobile && <Box minHeight="180px" minWidth="100px" /> }
        <WrapItem
          position={ isMobile ? 'relative' : 'absolute' }
          left={ isMobile ? 'relative' : '-80px' }
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
            borderColor={ accentColor }
          />
        </WrapItem>
        <WrapItem>
          <Center
            width="100%"
            alignSelf="center"
            color={ textColor }
          >
            <div className="block items-center">
              <h1>Neeko Blomgren</h1>
              <h2>UI/UX Web Developer</h2>
              <h3>efficiency, simplicity, modernity</h3>
            </div>
          </Center>
        </WrapItem>
      </Wrap>
      <WrapItem
        width="100%"
        placeContent="center"
      >
        { /* <Box>column 1</Box> */ }
        <Center
          width="95%"
          borderBottomLeftRadius="10"
          borderTopRightRadius="10"
          borderBottomRightRadius="10"
          boxShadow="lg"
          borderBottom="1px"
          borderRight="1px"
          display="flex"
          flexDirection={ isMobile ? 'column' : 'row' }
          bg={ bgColor }
          borderColor={ accentColor }
          color={ textColor }
        >
          <WrapItem
            marginBottom="auto"
            marginTop="12px"
            marginLeft="12px"
          >
            <h3>welcome!</h3>
          </WrapItem>
          <Box
            display="flex"
            flexDirection="column"
            paddingTop="16px"
            paddingLeft="20px"
            paddingRight="40px"
            marginTop="16px"
            marginBottom="auto"
            placeContent="center"
            gap="16px"
          >
            <WrapItem width="100%" display="inline">
              I&apos;m a front-end web specialist.
            </WrapItem>
            <WrapItem width="100%" display="inline">
              Having started&nbsp;
              <Tooltip
                hasArrow
                placement="top"
                label="Graduated with a UX diploma"
              >
                <span className="tooltip">
                  self-taught in code,&nbsp;
                </span>
              </Tooltip>
              I&apos;ve been in the industry for 5 years, and am currently a lead at&nbsp;
              <Tooltip
                hasArrow
                placement="top"
                label="Responsible for princess.com/cruise-search/"
              >
                <span className="tooltip">
                  Princess Cruiselines&nbsp;
                </span>
              </Tooltip>
            </WrapItem>
            <WrapItem width="100%" display="inline">
              Whether it be fitting into a massive teams and making&nbsp;
              <Tooltip
                hasArrow
                placement="top"
                label="Like the background feature in Microsoft Teams"
              >
                <span className="tooltip">
                  enterprise-level contributions,&nbsp;
                </span>
              </Tooltip>
              or taking&nbsp;
              <Tooltip
                hasArrow
                placement="top"
                label="Such as this portfolio, with most of the code 100% owned by me."
              >
                <span className="tooltip">
                  personal projects&nbsp;
                </span>
              </Tooltip>
              from ideation to production, I am a well-balanced professional with integrity.
            </WrapItem>
            <WrapItem width="100%" display="inline">
              { /* TODO: place IMD page. */ }
              With an&nbsp;
              <Tooltip hasArrow placement="top" label="external link to the program i attended">
                <Link className="inline" href="http://uw.com">
                  <span className="external-link inline">
                    education in UX,
                  </span>
                </Link>
              </Tooltip>
              &nbsp;I&apos;m comfortable in a design conversation, and have an eye for pixel
              perfection. I design all of my personal projects.
            </WrapItem>
            { /* <WrapItem width="100%" display="inline"> */ }
            { /*    */ }
            { /* </WrapItem> */ }
            <WrapItem marginBottom="16px" width="100%" display="inline">
              You&apos;ll find my solutions to be committed, timely, and ever-evolving.
            </WrapItem>
          </Box>
          { /* <WrapItem */ }
          { /*   marginBottom="auto" */ }
          { /*   padding="16px" */ }
          { /*   width="10%" */ }
          { /* > */ }
          { /*   <h3>goodbye!</h3> */ }
          { /* </WrapItem> */ }
        </Center>
      </WrapItem>
      <WrapItem
        width={ `${isMobile ? '95%' : '85%'}` }
      >
        <Center
          width="100%"
          borderBottomLeftRadius="10"
          borderTopRightRadius="10"
          borderBottomRightRadius="10"
          boxShadow="lg"
          borderBottom="1px"
          borderRight="1px"
          bg={ bgColor }
          borderColor={ accentColor }
          color={ textColor }
          display="flex"
          flexDirection={ isMobile ? 'column' : 'row' }
        >
          <WrapItem
            width="10%"
            marginBottom="auto"
            marginTop="12px"
            marginLeft="12px"
          >
            <h3>the site</h3>
          </WrapItem>
          <Wrap padding="4" width="90%" marginTop="20px">
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
