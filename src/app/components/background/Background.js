'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import BackgroundController from './BackgroundController';
import { circleDrawLoop, genCircles, shapesModule } from './scripts/shapes';
import './style/background.css';
import { setIntervalObj } from '../../../redux/slices/background';

/** Background.js - Background Component
 * Provides Background Component with particle/circle animations which bounce around the screen
 * using the window viewport as the constraints. Provides Context and Canvas.
 * Main Variables (of each Circle): Amount, Radius, Speed
 * Default Values (In that order): 500, 2.5, 0.15
 * Interactivity: Using <AnimationController>, user can play with values. There is also a limiter.
 */
function Background() {
  const dispatch = useDispatch();
  const {
    viewport: {
      width: viewportWidth,
      height: viewportHeight
    },
    loading: { app: isAppLoading }
  } = useSelector((state) => state.common);

  const {
    amount,
    radius,
    speed,
    interval
  } = useSelector((state) => state.background);

  // Ref to track the canvas element in which all circles are drawn.
  const canvasElement = useRef({});
  const [context, setContext] = useState({});

  /**
   * Callback - Clear Canvas
   * This method is used recursively on the canvas alongside the
   * draw method so that each generated circle is cleared off the canvas
   * before drawing the next one.
   */
  const clear = useCallback(() => {
    // const { current: canvas } = canvasElement;
    const { canvas } = context;
    if (context.canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [context.canvas]);

  // init() function fires on pageload from useEffect, and when user re-renders and randomizes.
  // Default (on pageload) argument values as initial state of amount, radius, and speed.
  /**
   * Callback - Initialization
   * Is called when new Background has been mounted. Used to define the Canvas and the Context
   * in which circles are drawn recursively. Finally, it uses the animate method to
   * continuously call the draw method at a defined interval.
   *
   * TODO: improve this.
   */
  const init = (amt, rad, spd) => {
    // Canvas, Context

    // Resize to Window Viewport on pageload
    // resizeCanvas(canvasElement.current);

    // Placing Context and Canvas into shapes modules to encapsulate it for usage
    // with shapes instance and draw functions.
    const shapes = shapesModule(context, canvasElement.current);

    // Generates Circle Objects
    const circles = genCircles(amt, rad, spd, shapes, canvasElement.current);

    // After clearing previous draw of 'circles'
    // calls CircleDrawLoop where implementation of bouncing circles is defined
    const draw = () => {
      clear();
      circleDrawLoop(circles, canvasElement.current);
    };

    // Animate function sets recursive draw() calls using setInterval,
    // which also returns an interval object
    // which is then stored in the 'intervalObj' state.
    // This also determines the fps of the animation. (default = 5ms)
    const animate = () => {
      clearInterval(interval);
      dispatch(setIntervalObj({}));
      dispatch(setIntervalObj(setInterval(draw, 5)));
    };

    // Begins animation
    animate();
    return animate;
  };

  /**
   * useEffect - Initialization
   * When app is finished loading, we know that the canvas element ref is mounted,
   * and that the context an then be attached to it.
   */
  useEffect(() => {
    if (!isAppLoading && canvasElement.current) {
      const newContext = canvasElement.current.getContext('2d');
      setContext(newContext);
    }
  }, [isAppLoading, canvasElement.current]);

  /**
   * useEffect - On Canvas Ready
   * When context has been given to the canvas, we can safely start to manipulate it with
   * recursive draw method use via the init function..
   */
  useEffect(() => {
    if (context.canvas) {
      init(amount, radius, speed);
    }
  }, [context.canvas]);

  /**
   * useEffect - On Variable Change
   * When the redux-based state of Amount, Radius, and Speed are tracked to have changed,
   * we can re-initialize the animation. It also watches for viewport changes.
   */
  useEffect(() => {
    if (context.canvas) {
      init(amount, radius, speed);
    }
  }, [amount, radius, speed, viewportWidth, viewportHeight]);

  return (
    <div id="background-animation">
      <canvas ref={ canvasElement } id="canvas-bg" width={ viewportWidth } height={ viewportHeight } />
    </div>
  );
}

export default Background;
