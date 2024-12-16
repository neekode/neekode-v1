import { Box, Flex, Heading, ListItem, UnorderedList, WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useCallback } from 'react';
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
    activeSegment
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
          gap="24px"
          direction="column"
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
          size={ 128 }
          rotate={ isMobile || isTablet ? 180 : 45 }
        />
      </MotionBox>
    );
  }, [activeSegment, isMobile, isTablet]);

  return (
    <WrapItem
      width={ isMobile || isTablet ? '100%' : '30%' }
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
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        padding="24px"
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
