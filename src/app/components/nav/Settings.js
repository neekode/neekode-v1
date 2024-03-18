'use client';

// External
import {
  Box,
  Menu,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  keyframes,
  useColorModeValue
} from '@chakra-ui/react';

// In-app
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SettingsIcon } from '@chakra-ui/icons';
import { setIsBgControllerOpen } from '../../../redux/slices/nav';

/**
 * Settings -
 * TODO:
 */
export default function Settings(props) {
  const {
    theme,
    handleThemeChange,
    mode,
    handleModeChange
  } = props;
  const dispatch = useDispatch();

  const bgColor = useColorModeValue('brand.200', 'brand.700');
  const textColor = useColorModeValue('brand.800', 'brand.100');

  const gearSpin = keyframes`
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(0deg)
    }`;

  // TODO: fix this.
  const menuSlide = keyframes`
    from {
      right: 40px
    }
    to {
      right: 0
    }
  `;

  const {
    isBgControllerOpen
  } = useSelector((state) => state.nav);
  return (
    <div className="my-auto">
      <Menu
        offset={ [50, -50] }
      >
        { ({ isOpen }) => {
          const gearSpinAnimation = `${gearSpin} 0.5s linear`;
          const menuSlideAnimation = `${menuSlide} 5s linear`;

          const attachGearSpin = {
            animation: isOpen ? gearSpinAnimation : null
          };
          const attachMenuSlide = {
            animation: isOpen ? menuSlideAnimation : null
          };
          return (
            <>
              <Box
                { ...attachGearSpin }
              >
                <MenuButton
                  zIndex="12"
                  // className="hover:scale-125"
                  as={ IconButton }
                  bg={ bgColor }
                  _hover={ { bg: 'transparent' } }
                  _expanded={ { bg: 'transparent' } }
                  icon={ (
                    <SettingsIcon
                      height={ 8 }
                      width={ 8 }
                      color={ textColor }
                    />
                  ) }
                  // _focus={ { outline: `1px solid ${accentColor}` } }
                />
              </Box>
              <Box
                { ...attachMenuSlide }
              >
                <MenuList
                  height={ 200 }
                  as={ motion.div }
                  // height="40px"
                  // width="40px"
                  // position="absolute"
                  // right="60px"
                  // drag="x"
                  // dragConstraints={ {
                  //   left: -100,
                  //   right: 800
                  // } }
                  // transition="0.5s linear"
                  // onMouseLeave={ onClose }
                >
                  <MenuItem>
                    { mode }
                    <Switch
                      onChange={ () => handleModeChange(mode === 'fancy' ? 'simple' : 'fancy') }
                    />
                  </MenuItem>
                  <MenuItem>
                    { theme }
                    <Switch onChange={ handleThemeChange } />
                  </MenuItem>
                  <MenuItem onClick={ () => dispatch(setIsBgControllerOpen(!isBgControllerOpen)) }>
                    Animation Controller
                  </MenuItem>
                </MenuList>
              </Box>
            </>
          );
        } }
      </Menu>
      { /* <Tooltip hasArrow placement="left" label="Settings"> */ }
      { /* </Tooltip> */ }
    </div>
  );
}
