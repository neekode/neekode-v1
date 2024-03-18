'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ControllerRenderer from './ControllerRenderer';
import { circleDrawLoop, genCircles, shapesModule } from './scripts/shapes';
import './style/background.css';

/** Hook Component Implementation of interactive canvas animation on Intro Screen - 8/15/2019
 Provides Intro Component with particle/circle animations which bounce around the screen
 using the window viewport as the constraints.
 - Main Variables (of each Circle): Amount, Radius, Speed
 - Default Values (In that order): 500, 2.5, 0.15
 - Interactivity: Using the animation-controller element, user can set new values for each
 and re-render the animation using the provided inputs and buttons. There is also a randomize option

 If you would like to re-implement this component you must make sure to have the shapes.js file,
 create an HTML element which is then referenced right down below (ctrl+f: *HERE*),
 and add styles to the animation-controller element(s).
 */

function Background() {
  const [ballpitVars, setBallpitVars] = useState({
    amount: 50,
    radius: 2,
    speed: 0.1
  });

  // State which tracks the interval of consecutive draws. Necessary to unify single interval,
  // not creating others.
  const [intervalObj, setIntObj] = useState();
  const canvasElement = useRef({});

  const {
    viewport: {
      height,
      width
    },
    loading: { app: isAppLoading }
  } = useSelector((state) => state.common);

  const {
    isBgControllerOpen
  } = useSelector((state) => state.nav);

  // const handleResize = () => {
  //   clearInterval(intervalObj);
  //   init(ballpitVars.amount, ballpitVars.radius, ballpitVars.speed, true);
  // };
  //
  // const theme = `Background-${section}`;

  // // Resizes canvas to current window viewport
  // const resizeCanvas = (c) => {
  //   c.width = window.innerWidth;
  //   c.height = window.innerHeight;
  // };

  // Clear Canvas
  const clear = (ctx, c) => {
    ctx.clearRect(0, 0, c.width, c.height);
  };

  // init() function fires on pageload from useEffect, and when user re-renders and randomizes.
  // Default (on pageload) argument values as initial state of amount, radius, and speed.
  const init = (amt, rad, spd, onPageLoad = false) => {
    // Canvas, Context
    const theContext = canvasElement.current.getContext('2d');

    // Resize to Window Viewport on pageload
    // resizeCanvas(canvasElement.current);

    // Placing Context and Canvas into shapes modules to encapsulate it for usage
    // with shapes instance and draw functions
    const shapes = shapesModule(theContext, canvasElement.current);

    // Generates Circle Objects
    const circles = genCircles(amt, rad, spd, shapes, canvasElement.current);

    // After clearing previous draw of 'circles'
    // calls CircleDrawLoop where implementation of bouncing circles is defined
    const draw = () => {
      clear(theContext, canvasElement.current);
      circleDrawLoop(circles, canvasElement.current);
    };

    // Animate function sets recursive draw() calls using setInterval,
    // which also returns an interval object
    // which is then stored in the 'intervalObj' state.
    // This also determines the fps of the animation. (default = 5ms)
    const animate = () => {
      setIntObj(setInterval(draw, 5));
    };

    // Begins animation
    // Fires animate if user on initial pageload
    if (onPageLoad) {
      animate();
    }
    return animate;
  };

  const handleRandomize = () => {
    // Clears previous interval
    clearInterval(intervalObj);
    // Randomizes amount and radius coefficient
    // Default values chosen to to accomodate for slower computers and browsers
    const newAmt = (Math.random() * 500).toFixed(3);
    const newRad = (Math.random() * 15).toFixed(3);
    const newSpd = (Math.random() * 0.15).toFixed(3);

    setIntObj(init(newAmt, newRad, newSpd));

    setBallpitVars({
      ...ballpitVars,
      amount: newAmt,
      speed: newRad,
      radius: newSpd
    });
  };

  const handleRender = () => {
    // Clears previous interval (native function)
    clearInterval(intervalObj);
    // Passes new values using current variable states into initialization script
    setIntObj(init(ballpitVars.amount, ballpitVars.radius, ballpitVars.speed));
  };

  // Initial side effect change which fires after component mounts and DOM/virtualDOM is ready.
  useEffect(() => {
    if (!isAppLoading) {
      init(ballpitVars.amount, ballpitVars.radius, ballpitVars.speed, true);
    }
  }, [isAppLoading]);

  return (
    <div id="background-animation">
      <canvas ref={ canvasElement } id="myCanvas" width={ width } height={ height } />
      { isBgControllerOpen && (
        <ControllerRenderer
          setBallpitVars={ setBallpitVars }
          ballpitVars={ ballpitVars }
          handleRender={ handleRender }
          handleRandomize={ handleRandomize }
        />
      ) }
    </div>
  );
}

export default Background;
