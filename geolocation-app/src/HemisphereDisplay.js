import React from "react";
import northernPic from "./image/northern.webp";
import southernPic from "./image/southern.jpg";
import "./Hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: "it is northern hemisphere",
    picture: northernPic,
  },
  Southern: {
    text: "it is southern hemisphere",
    picture: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div>
      <div className={hemisphere}>
        <div className="ui raised text container segment">
          <div className="image">
            <img src={picture} alt="hemisphere " />
          </div>
          <div className="ui teal bottom attached label">
            <h1>{text}</h1>
          </div>
        </div>
      </div>
      <h1>Hello</h1>
    </div>
  );
};

export default HemisphereDisplay;
