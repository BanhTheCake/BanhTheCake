import React from "react";
import './Icon.scss'

const Icon = ({ img, alt }) => {
  return <div className="icon">
    <img src={img} alt={alt} />
  </div>;
};

export default Icon;
