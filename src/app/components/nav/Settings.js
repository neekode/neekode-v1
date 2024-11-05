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
  useColorModeValue
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { SettingsIcon } from '@chakra-ui/icons';
import { setIsControllerOpen } from '../../../redux/slices/background';
import BackgroundController from '../background/BackgroundController';

/**
 * Settings -
 * TODO:
 */
export default function Settings(props) {
  const {
    theme,
    mode,
    isMobile,
    handleThemeChange,
    handleModeChange
  } = props;
  const dispatch = useDispatch();

  const bgColor = useColorModeValue('brand.200', 'brand.700');
  const textColor = useColorModeValue('brand.800', 'brand.100');

  // Spin animation for gear icon
  const gearSpin = keyframes`
      from {
          transform: rotate(45deg);
      }
      to {
          transform: rotate(0deg);
      }
  `;

  // Slide animation for menu
  const menuSlide = keyframes`
      from {
          right: 40px;
      }
      to {
          right: 0;
      }
  `;

  const { isControllerOpen } = useSelector((state) => state.background);

  const size = isMobile ? 4 : 8;

  return (
    <div className="nav-item flex my-auto items-center underline-offset-4">
      <Menu offset={ [50, -50] }>
        { ({ isOpen }) => {
          // Define animations with Emotion's `keyframes`
          const gearSpinAnimation = `${gearSpin} 0.5s linear infinite`;
          const menuSlideAnimation = `${menuSlide} 0.5s ease`;

          // Apply animations conditionally
          const attachGearSpin = {
            animation: isOpen ? gearSpinAnimation : null
          };

          const attachMenuSlide = {
            animation: isOpen ? menuSlideAnimation : null
          };

          return (
            <>
              <Box { ...attachGearSpin }>
                <MenuButton
                  zIndex="12"
                  as={ IconButton }
                  bg={ bgColor }
                  _hover={ { bg: 'transparent' } }
                  _expanded={ { bg: 'transparent' } }
                  icon={ (
                    <SettingsIcon
                      height={ size }
                      width={ size }
                      color={ textColor }
                    />
                  ) }
                />
              </Box>
              <Box { ...attachMenuSlide }>
                <MenuList as={ motion.div } height={ 200 }>
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
                  <MenuItem
                    onClick={ () => dispatch(setIsControllerOpen(!isControllerOpen)) }
                  >
                    Background Controller
                  </MenuItem>
                </MenuList>
                { isControllerOpen && <BackgroundController /> }
              </Box>
            </>
          );
        } }
      </Menu>
      { /* Tooltip for future use */ }
      { /* <Tooltip hasArrow placement="left" label="Settings"> */ }
      { /* </Tooltip> */ }
    </div>
  );
}
