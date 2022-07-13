import React from "react";
import "./main.css";

const Main = (props) => {
  const current = props?.res;

  return (
    <div className="card-main">
      <div className="card-static-1">
        <p className="text-static">precipitation</p>
        <p className="text-desc">{current?.precip_mm} mm</p>
      </div>
      <div className="card-static-2">
        <p className="text-static">humidity</p>
        <p className="text-desc">{current?.humidity}%</p>
      </div>
      <div className="card-static-3">
        <p className="text-static">wind</p>
        <p className="text-desc">{current?.wind_kph} km/h</p>
      </div>
    </div>
  );
};

export default Main;
