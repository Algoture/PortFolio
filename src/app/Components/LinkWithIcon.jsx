import React from "react";
import SvgIcon from "./SvgIcon";
const LinkWithIcon = ({ to, svg }) => {
  return (
    <a href={to} target="_blank" className="iconBox">
      <SvgIcon id="" svg={svg} />
    </a>
  );
};

export default LinkWithIcon;
