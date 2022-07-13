import React, { useState } from "react";
import { useHttpClient } from "../Hooks/http-hook";
import Context from "./context";

const WeatherContext = (props) => {
  const [weatherResult, setWeatherResult] = useState();
  const { sendRequest } = useHttpClient();
  const [inputValue, setInputValue] = useState('tel aviv');

  const fetchWeather = async () => {
    try {
      const responseData = await sendRequest(
        `http://localhost:1337/api/${inputValue}`
      );
      setWeatherResult(responseData);
    } catch (err) {}
  };

  return (
    <Context.Provider
      value={{
        fetchWeather,
        weatherResult,
        setInputValue,
        inputValue
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default WeatherContext;
