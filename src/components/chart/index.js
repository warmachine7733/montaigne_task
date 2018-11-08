import React, { Component } from "react";
// import LineChart from "react-linechart";\
import { connect } from "react-redux";
import * as chartAction from "./action";
import { bindActionCreators } from "redux";
import Chart from "./chart";
class ChartContainer extends Component {
  render() {
    return (
      <div>
        <Chart {...this.props} />
      </div>
    );
  }
  componentDidMount() {
    this.props.action.callGetChartDataApi();
  }
}
const mapStateToProps = state => {
  return {
    keyword1Points: state.chart.chartData["keyword 1"],
    keyword2Points: state.chart.chartData["keyword 2"],
    keyword3Points: state.chart.chartData["keyword 3"],
    keyword4Points: state.chart.chartData["keyword 4"],
    keyword5Points: state.chart.chartData["keyword 5"]
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(chartAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartContainer);
