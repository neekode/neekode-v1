import { Box, Center, Image, Wrap, WrapItem } from '@chakra-ui/react';

export default function ProfilePicture(
  {
    colorValues,
    isMobile
  }
) {
  // TODO: animate in some way?
  return (
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
      alignSelf="center"
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
  );
}
