import React from "react";
import "./LoadingBar.css";

export default class LoadingBar extends React.Component {
  render() {
    return (
      <div class="spinner">
        <div class="bounce1" />
        <div class="bounce2" />
        <div class="bounce3" />
        <div class="bounce4" />
      </div>
    );
  }
}
