import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/UIElements/Card";
import { Footer } from "../../components/Weather/Footer";
import Header from "../../components/Weather/Header";
import Main from "../../components/Weather/Main";

import "./weather.css";
import context from "../../context/context";

const Weather = () => {
  const { weatherResult, fetchWeather } = useContext(context);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (active) {
      fetchWeather();
    }
    return () => {
      setActive(false);
    };
  }, [fetchWeather, active,weatherResult]);

  return (
    <>
      <div className="weather-container">
        <Card>
          { weatherResult &&(
            <> 
              <Header res={weatherResult} />
              <Main res={weatherResult?.current} />
              <Footer res={weatherResult} />
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default Weather;
