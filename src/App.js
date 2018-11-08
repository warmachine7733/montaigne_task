import React, { Component } from "react";
import Chart from "./components/chart";
import Table from "./components/table";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h5 className="heading">
          line chart using react-easy-chart and table pagination using material-ui
        </h5>
        <Chart />
        <Table />
      </div>
    );
  }
}

export default App;
