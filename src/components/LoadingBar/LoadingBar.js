/**
 * If there is any delay in receiving the response from the backend due to poor network...
 * Displaying the loading bar
 */

import React from "react";
import "./LoadingBar.css";

export default class LoadingBar extends React.Component {
  render() {
    return (
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
        <div className="bounce4" />
      </div>
    );
  }
}
