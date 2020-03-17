import React from "react";
import "./styles.css";

export const InfoText = ({ text, value }) => (
  <p className="info-text">
    <span className="text">{text}</span>:&nbsp;
    <span className="value">{value}</span>
  </p>
);
