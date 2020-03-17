import React from "react";
import "./styles.css";

export const Button = ({ onClick, children, disabled }) => (
  <button
    disabled={disabled}
    type="button"
    onClick={onClick}
    className="button"
  >
    {children}
  </button>
);
