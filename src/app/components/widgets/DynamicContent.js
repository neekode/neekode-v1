import { Box, Flex, Heading, ListItem, UnorderedList, WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useCallback, useEffect } from 'react';
import {
  fadeAnimation,
  getListItemVariantsReveal,
  getListVariantsReveal,
  headingVariants
} from '../../../constants';
import TapMeIcon from '../svgs/TapMeIcon';

const MotionUnorderedList = motion(UnorderedList);
const MotionListItem = motion(ListItem);
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

export default function DynamicContent(props) {
  const {
    type,
    direction,
    title,
    colorValues,
    colorHexes,
    isMobile,
    isTablet,
    activeSegment,
    setActiveSegment
  } = props;

  const isDirectionLeft = direction === 'left';
  const isMobileOrTablet = isMobile || isTablet;
  const borderProps = {
    boxShadow: '2xl',
    borderTop: '1px',
    borderRight: isMobileOrTablet ? '' : '1px',
    borderTopRightRadius: isMobileOrTablet ? '' : '10',
    borderBottom: isMobileOrTablet ? '1px' : '',
    borderColor: colorHexes.accentHex,
    borderTopLeftRadius: !isDirectionLeft ? '' : '100',
    borderBottomLeftRadius: isDirectionLeft || isMobileOrTablet ? '30' : '10',
    borderBottomRightRadius: isDirectionLeft || isMobileOrTablet ? '30' : '100',
    borderLeft: !isDirectionLeft ? '' : '1px'
  };

  /**
   * useCallback - Evaluating Inner Content based on State
   */
  const getInnerContent = useCallback(() => {
    if (activeSegment) {
      if (!activeSegment.bullets) {
        return <div>{ activeSegment.description }</div>;
      }

      return (
        <Flex
          gap={ isMobile && !isTablet ? '12px' : '24px' }
          minH={ isMobile && !isTablet ? '180px' : '240px' }
          direction="column"
          placeContent="center"
          alignItems="center"
        >
          <MotionHeading
            variants={ headingVariants }
            initial="hidden"
            animate="visible"
            exit="exit"
            fontStyle="italic"
            size="xs"
            placeSelf="center"
          >
            { activeSegment.subheader }
          </MotionHeading>
          <MotionUnorderedList
            variants={ getListVariantsReveal() }
            initial="hidden"
            animate="visible"
            exit="exit"
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
        </Flex>
      );
    }

    return (
      <MotionBox { ...fadeAnimation }>
        <TapMeIcon
          colorHexes={ colorHexes }
          size={ isMobile || isTablet ? 64 : 128 }
          rotate={
            isDirectionLeft
              ? isMobileOrTablet
                ? 0 // isDirectionLeft + Mobile/Tablet
                : -45 // isDirectionLeft + Desktop
              : isMobileOrTablet
                ? 180 // Not isDirectionLeft + Mobile/Tablet
                : 45 // Not isDirectionLeft + Desktop
          }

        />
      </MotionBox>
    );
  }, [activeSegment, isMobile, isTablet]);

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
      }, 12000);
    }
    return () => clearTimeout(timeoutId);
  }, [activeSegment]);

  return (
    <WrapItem
      width={ isMobile || isTablet ? '100%' : '40%' }
      minH={ isMobile || isTablet ? '240px' : '300px' }
      textAlign="center"
      flexDirection="column"
    >
      <MotionHeading
        { ...fadeAnimation }
        fontSize={ isMobile ? '20px' : '24px' }
        alignSelf="center"
        marginBottom="12px"
        marginTop="12px"
        key={ activeSegment ? activeSegment.header : type }
      >
        { activeSegment ? activeSegment.header : title }
      </MotionHeading>
      <Flex
        { ...borderProps }
        bg={ colorValues.innerWrapperColor }
        style={ {
          textAlign: '-webkit-center'
        } }
        fontStyle={ activeSegment ? '' : 'italic' }
        fontSize={ isMobile ? '12px' : '18px' }
        minW={ isMobile || isTablet ? '' : '550px' }
        minH={ isMobile ? '' : '300px' }
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        padding={ isMobile ? '12px' : '24px' }
        gap="12px"
        placeContent="center"
        overflow="hidden"
        key={ activeSegment ? `${activeSegment.id}-box` : 'default-box' }
      >
        { getInnerContent() }
      </Flex>
    </WrapItem>
  );
}
