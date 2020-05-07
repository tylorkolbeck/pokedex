import React from "react";
import "./Button.scss";

export default function Button({ children, onClick }) {
  return (
    <button className="btn u-m-a" onClick={onClick}>
      {children}
    </button>
  );
}
