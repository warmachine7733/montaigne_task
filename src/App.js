import React, { Component } from "react";
import Chart from "./components/chart";
import Table from "./components/table";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Chart />
        <Table />
      </div>
    );
  }
}

export default App;
