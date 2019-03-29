import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  }
}

export default App;
