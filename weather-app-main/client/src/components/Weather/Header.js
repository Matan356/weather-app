import React from "react";

import "./header.css";

const Header = (props) => {
  const location = props?.res?.location;
  const current = props?.res?.current;

  let date = location?.localtime.slice(0, 10);
  let time = location?.localtime.slice(10);

  return (
    <div className="card-header">
      <p className="text-city">{location?.region}</p>
      <p className="text-country">{location?.country}</p>
      <p className="current-time">
        {date} at {time}
      </p>
      <p className="text-celsius">{current?.temp_c}°</p>
      <p className="text-condition">{current?.condition.text}</p>
    </div>
  );
};

export default Header;
