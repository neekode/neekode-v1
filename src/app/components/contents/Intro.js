'use client';

/* This layout is the wrapper for all the content of the page. Siblings with <Nav/>.  */

import { Center, Image, Wrap, WrapItem, useColorModeValue, Tooltip } from '@chakra-ui/react';
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
      spacing={ isMobile ? '4' : '4' }
      placeContent="center"
    >
      <WrapItem>
        <Center borderRadius="10">
          <Image
            borderRadius="full"
            placeSelf="center"
            boxSize="180"
            src="/head-shot-2.jpg"
            alt="intro head shot"
            boxShadow="lg"
            border="1px"
            borderColor={ accentColor }
          />
        </Center>
      </WrapItem>
      <WrapItem
        width="100%"
        maxWidth="500px"
      >
        <Center
          width="100%"
          alignSelf="center"
          borderRadius="10"
          boxShadow="lg"
          border="1px"
          bg={ bgColor }
          borderColor={ accentColor }
          color={ textColor }
        >
          <div className="block items-center">
            <h1>Neeko Blomgren</h1>
            <h2>UI Engineer</h2>
            <h3>efficiency, simplicity, modernity</h3>
          </div>
        </Center>
      </WrapItem>
      <WrapItem
        width="100%"
      >
        <Center
          width="100%"
          borderRadius="10"
          boxShadow="lg"
          border="1px"
          bg={ bgColor }
          borderColor={ accentColor }
          color={ textColor }
        >
          <Wrap padding="4">
            <WrapItem width="100%">
              <h3>welcome!</h3>
            </WrapItem>
            <WrapItem width="100%">
              entered the industry self-taught, and now with 5 years professional front-end SPA
              experience
            </WrapItem>
            <WrapItem width="100%">
              i consider myself a React savant.
            </WrapItem>
            <WrapItem width="100%" display="inline">
              { /* TODO: place IMD page. */ }
              with an&nbsp;
              <Tooltip hasArrow placement="top" label="external link to the program i attended">
                <Link className="inline" href="http://uw.com">
                  <span className="external-link inline">
                    education in UX,
                  </span>
                </Link>
              </Tooltip>
              &nbsp;i&apos;m comfortable in a design conversation, and have an eye for pixel
              perfection
            </WrapItem>
            <WrapItem width="100%" display="inline">
              whether it be fitting into a massive teams and making&nbsp;
              <Tooltip
                hasArrow
                placement="top"
                label="like for Microsoft Teams"
              >
                <span className="tooltip">
                  enterprise-level contributions,&nbsp;
                </span>
              </Tooltip>
            </WrapItem>
            <WrapItem width="100%" display="inline">
              or taking&nbsp;
              <Tooltip
                hasArrow
                placement="top"
                label="like this portfolio"
              >
                <span className="tooltip">
                  personal projects&nbsp;
                </span>
              </Tooltip>
              from ideation to production,
            </WrapItem>
            <WrapItem width="100%" display="inline">
              you&apos;ll find my solutions to be well-researched, thorough, and ever evolving. and
              always on time.
            </WrapItem>
          </Wrap>
        </Center>
      </WrapItem>
      <WrapItem
        width={ `${isMobile ? '95%' : '85%'}` }
      >
        <Center
          width="100%"
          borderRadius="10"
          boxShadow="lg"
          border="1px"
          bg={ bgColor }
          borderColor={ accentColor }
          color={ textColor }
        >
          <Wrap padding="4">
            <WrapItem width="100%">
              <h3>this website</h3>
            </WrapItem>
            <WrapItem width="100%" display="inline">
              built using my preferred tech of NextJS, React, Redux Toolkit, Chakra, and
              Tailwind, it is split into 3 sections.
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
