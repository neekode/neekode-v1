import { Center, Wrap, WrapItem } from '@chakra-ui/react';

export const metadata = {
  title: 'intro - neekode'
};

export default function Intro() {
  return (
    <div id="intro" className="page">
      { /* TODO: Lightly Randomize this stuff? But definitely map.  */ }
      <Wrap spacing="36px" align="center" justify="center">
        <WrapItem>
          <Center w="280px" h="280px" bg="#defcfc" color="black">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="280px" h="280px" bg="#bde9ef" color="black">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="280px" h="280px" bg="#defcf8" color="black">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="280px" h="280px" bg="#bdefed" color="black">
            Box 4
          </Center>
        </WrapItem>
      </Wrap>
    </div>
  );
}
