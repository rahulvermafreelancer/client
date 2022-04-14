import React from "react";
import Menu from "./Menu";

const Base = ({ children }) => (
  <div>
    <Menu />
    <div>
      <div>{children}</div>
    </div>
  </div>
);

export default Base;
