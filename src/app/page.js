import {
  Box
} from '@chakra-ui/react';
import IntroContent from './components/contents/Intro';

export const metadata = {
  title: 'intro - neekode'
};

export default function Intro() {
  return (
    <Box id="intro" className="page">
      <IntroContent />
    </Box>
  );
}
