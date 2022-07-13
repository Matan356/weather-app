import React from "react";
import "./footer.css";

export const Footer = (props) => {
  let currentTime;
  let hours;
  if (props.res || props.res !== null) {
    currentTime = +props.res?.location?.localtime?.slice(10, -3);
    hours = props.res?.forecast?.forecastday[0].hour;
  }

  const sortString = (str = "") => str.slice(10);

  const findCurrentIndex = function (i, d) {
    if (!currentTime || currentTime === null) return;

    let indexOfHour;
    i === 0 ? (indexOfHour = currentTime - d) : (indexOfHour = currentTime + i);
    if (indexOfHour === -1) indexOfHour = 23;
    if (indexOfHour === -2) indexOfHour = 22;
    if (indexOfHour === -3) indexOfHour = 21;

    return indexOfHour;
  };

  const displayHour = function (i, d) {
    if (!currentTime || currentTime === null) return;
    let indexOfHour = findCurrentIndex(i, d);
    let hour = sortString(hours[indexOfHour]?.time);
    return hour;
  };

  const displayCelsius = function (i, d) {
    if (!currentTime || currentTime === null) return;
    let indexOfHour = findCurrentIndex(i, d);
    let cel = hours[indexOfHour]?.temp_c;
    return cel;
  };

  let firstHour = displayHour(0, 3);
  let secondHour = displayHour(0, 2);
  let thirdHour = displayHour(0, 1);
  let fourthHour = displayHour(0, 0);
  let fifthHour = displayHour(1, 0);
  let firstCelsius = displayCelsius(0, 3);
  let secondCelsius = displayCelsius(0, 2);
  let thirdCelsius = displayCelsius(0, 1);
  let fourthCelsius = displayCelsius(0, 0);
  let fifthCelsius = displayCelsius(1, 0);

  return (
    <div className="card-footer">
      <div className="card-content-1">
        <p className="content-hour">{firstHour}</p>
        <p className="content-celsius">{firstCelsius}°</p>
      </div>

      <div className="card-content-2">
        <p className="content-hour">{secondHour}</p>
        <p className="content-celsius">{secondCelsius}°</p>
      </div>

      <div className="card-content-3">
        <p className="content-hour">{thirdHour}</p>
        <p className="content-celsius">{thirdCelsius}°</p>
      </div>

      <div className="card-content-4">
        <p className="content-hour">{fourthHour}</p>
        <p className="content-celsius">{fourthCelsius}°</p>
      </div>
      <div className="card-content-5">
        <p className="content-hour">{fifthHour}</p>
        <p className="content-celsius">{fifthCelsius}°</p>
      </div>
    </div>
  );
};
