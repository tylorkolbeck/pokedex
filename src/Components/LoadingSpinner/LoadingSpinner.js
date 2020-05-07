import React from "react";
import "./LoadingSpinner.scss";
import pokeBall from "../../assets/images/pokeball.png";

export default function LoadingSpinner() {
  return (
    <div className="spinner-wrapper">
      <img src={pokeBall}></img>
      Loading...
    </div>
  );
}
