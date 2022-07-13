import React, { useContext } from "react";
import context from "../../context/context";
import "./weatherContent.css";

const WeatherContent = () => {
  const { weatherResult } = useContext(context);

  const location = weatherResult?.location;
  const lon = weatherResult?.location?.lon;
  const lat = weatherResult?.location?.lat;

  let date = location?.localtime.slice(0, 10);
  let time = location?.localtime.slice(10);

  return (
    <>
      {weatherResult && (
        <div className="weather-content">
          <p>
            latitude {lat} longitude {lon}
          </p>
          <p>
            accurate to {date} at {time}
          </p>
          <p></p>
        </div>
      )}
    </>
  );
};

export default WeatherContent;
