import React, { Component } from "react";
import "./Dex.scss";
import PokeItem from "../PokeItem/PokeItem";
import dexHeader from "../../assets/images/dexHeader.png";

export default class Dex extends Component {
  render() {
    return (
      <div className="dex-wrapper">
        <div className="dex-header">
          <img src={dexHeader} alt="header" />
        </div>
        <div className="dex-content">
          <div className="search-wrapper">
            <div>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <PokeItem />
        </div>
      </div>
    );
  }
}
