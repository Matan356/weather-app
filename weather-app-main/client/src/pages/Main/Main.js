import React from "react";
import Header from "../../components/Navigatin/Header";
import WeatherContent from "../../components/Weather/WeatherContent";
import Form from "../Form/Form";
import Weather from "../Weather/Weather";

import "./main.css";

const Main = () => {
  return (
    <div className="main-nain">
        <div className="main-container">
      <Header />
        <Form />
        <WeatherContent/>
      </div>
        <Weather />
     </div>
  );
};

export default Main;
