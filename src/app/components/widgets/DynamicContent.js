import { Box, Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { motion } from 'framer-motion';
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
    colorHexes,
    colorValues,
    isMobile,
    hasWrapped,
    activeSegment
  } = props;

  const isDirectionLeft = direction === 'left';

  return (
    <Flex
      textAlign="center"
      flexDirection="column"
      minW={ hasWrapped ? '100%' : '400px' }
    >
      <MotionHeading
        fontSize="2xl"
        alignSelf="center"
        marginBottom="3"
        marginTop="3"
        { ...fadeAnimation }
        key={ activeSegment ? activeSegment.header : type }
      >
        { activeSegment ? activeSegment.header : title }
      </MotionHeading>
      { /* This is a lot lol. */ }
      <Box
        minH={ !isMobile && hasWrapped ? '300px' : '500px' }
        maxW={ hasWrapped ? '' : '400px' }
        alignContent={ !activeSegment ? 'center' : 'flexStart' }
        fontSize="16px"
        fontStyle={ activeSegment ? '' : 'italic' }
        padding={ hasWrapped ? '8' : '4' }
        borderColor={ colorValues.accentColor }
        boxShadow="2xl"
        borderBottomLeftRadius="10"
        borderTopRightRadius="10"
        borderTopLeftRadius={ !isDirectionLeft ? '' : hasWrapped ? '30' : '100' }
        borderBottomRightRadius={ isDirectionLeft ? '' : hasWrapped ? '30' : '100' }
        borderLeft={ !isDirectionLeft ? '' : hasWrapped ? '' : '1px' }
        borderRight={ isDirectionLeft ? '' : hasWrapped ? '' : '1px' }
        borderTop="1px"
        borderBottom={ hasWrapped ? '1px' : '' }
        display="flex"
        flexDirection="column"
        gap="12px"
        alignItems={ activeSegment ? '' : 'center' }
        placeContent="center"
        overflow="hidden"
        style={ {
          textAlign: '-webkit-center'
        } }
        key={ activeSegment ? `${activeSegment.id}-box` : 'default-box' }
      >
        { activeSegment
          ? (activeSegment.bullets
            ? (
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
                  maxW="80%"
                  placeSelf="center"
                >
                  { activeSegment.subheader }
                </MotionHeading>
                <MotionUnorderedList
                  variants={ getListVariantsReveal() }
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  maxW={ hasWrapped ? '720px' : '' }
                  fontSize="18px"
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
            ) : <div>{ activeSegment.description }</div>
          ) : (
            <MotionBox { ...fadeAnimation }>
              <TapMeIcon
                colorHexes={ colorHexes }
                size={ hasWrapped ? 96 : 128 }
                rotate={ hasWrapped ? 180 : 45 }
              />
            </MotionBox>
          ) }
      </Box>
    </Flex>
  );
}
