import React from "react";

export const FootBar = (props) => (
  <div className="bottom-container">
    <a className={props.x1} href={props.x2}>
      <img id={props.cssID} src={props.i1} alt={props.i2} />
      {props.a}
    </a>
  </div>
);
