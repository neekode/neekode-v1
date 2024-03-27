'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBallPitVars } from '../../../redux/slices/background';

/**
 * Component - Background Controller
 * Has integration with Redux and is able to control the background placed from
 * anywhere within the application.
 */
function BackgroundController() {
  const {
    loading: { app: isAppLoading }
  } = useSelector((state) => state.common);

  const {
    amount,
    radius,
    speed
  } = useSelector((state) => state.background);
  const dispatch = useDispatch();

  // We set the initial state of the inputs based on what is initially read from the Redux state.
  const [inputsState, setInputsState] = useState({
    amount,
    radius,
    speed
  });

  /**
   * useEffect - Inputs Persistence
   * Persists state of inputs for when new values are passed into
   * the redux. Mostly used for the randomizer.
   */
  useEffect(() => {
    if (!isAppLoading && (amount || radius || speed)) {
      setInputsState({
        amount,
        radius,
        speed
      });
    }
  }, [isAppLoading, amount, radius, speed]);

  /**
   * Callback Handlers - On Changes
   * Necessary for maintenance of the different values of the various inputs.
   */
  const handleAmtChange = (e) => {
    // dispatch(setBallPitVars({ amount: e.target.value }));
    setInputsState({
      ...inputsState,
      amount: e.target.value
    });
  };
  const handleRadChange = (e) => {
    setInputsState({
      ...inputsState,
      radius: e.target.value
    });
  };
  const handleSpdChange = (e) => {
    setInputsState({
      ...inputsState,
      speed: e.target.value
    });
  };

  /**
   * Callback - Randomize Handler
   * Randomizes amount and radius coefficient for funsies.
   */
  const handleRandomize = useCallback(() => {
    dispatch(setBallPitVars({
      amount: (Math.random() * 500).toFixed(3),
      radius: (Math.random() * 15).toFixed(3),
      speed: (Math.random() * 0.15).toFixed(3)
    }));
  }, [inputsState, amount, radius, speed]);

  /**
   * Callback - Renderer Handler
   * When user has clicked the re-render button, we now know it's safe to pass
   * all the new values to the BallPit redux state,
   * which will in turn will trigger useEffects inside the <Background/> component.
   */
  const handleRender = useCallback(() => {
    dispatch(setBallPitVars({
      amount: inputsState.amount,
      radius: inputsState.radius,
      speed: inputsState.speed
    }));
  }, [inputsState, amount, radius, speed]);

  return (
    <div id="Controller" className="">
      <div
        className="animation-controller"
      >
        <span className="header">Animation Controller</span>
        <div>Amount</div>

        <input
          onChange={ handleAmtChange }
          id="amtInput"
          value={ inputsState.amount }
          type="text"
        />

        <div> Radius Coefficient</div>

        <input
          onChange={ handleRadChange }
          id="radInput"
          value={ inputsState.radius }
          type="text"
        />
        <div> Speed</div>

        <input
          onChange={ handleSpdChange }
          id="spdInput"
          value={ inputsState.speed }
          type="text"
        />

        <br />
        <div>
          <button type="button" onClick={ handleRandomize } id="randomer" name="random">
            Randomize
          </button>
          <button type="button" onClick={ handleRender } id="renderer" name="render">
            Re-Render
          </button>
        </div>
      </div>
    </div>
  );
}

export default BackgroundController;
