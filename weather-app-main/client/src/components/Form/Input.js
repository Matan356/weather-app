import React, { useContext, useEffect, useRef } from "react";
import context from "../../context/context";
import Button from "./Button";

import "./input.css";

const Input = () => {
  const massage = "Destination provided not found.";
  const { setInputValue, fetchWeather, inputValue, weatherResult } =
    useContext(context);
  const inputRef = useRef(null);

  const handleClick = function (e) {
    e.preventDefault();
    fetchWeather();
  };

  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <div className="input-container">
        <p className="text-underline">City name </p>
        <div className="input-div">
          <input
            className="input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button click={handleClick} />
        </div>
        {!weatherResult && <p className="error-message">{massage}</p>}
      </div>
    </>
  );
};

export default Input;
