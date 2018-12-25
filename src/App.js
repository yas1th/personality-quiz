import React, { Component } from "react";
import { Provider } from "react-redux";
import { getStore } from "./store";
import "./App.css";
import { PersonalityTest } from "./pages/PersonalityTest";

const store = getStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersonalityTest />
      </Provider>
    );
  }
}

export default App;
