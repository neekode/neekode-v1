import { Wrap, WrapItem } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function MyStory({
  wrapperProps,
  colorValues,
  colorHexes
}) {
  const {
    viewport: {
      isMobile,
      isTablet
    }
  } = useSelector((state) => state.common);

  return (
    <AnimatePresence>
      <Wrap
        { ...wrapperProps }
        bg={ colorValues.bgColor }
        borderColor={ colorValues.accentColor }
        color={ colorValues.textColor }
      >
        Coming Soon!
      </Wrap>
    </AnimatePresence>

  );
}
