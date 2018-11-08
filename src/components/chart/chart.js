import React from "react";
import { LineChart } from "react-easy-chart";
import Paper from "@material-ui/core/Paper";
import "../../../node_modules/react-linechart/dist/styles.css";
import "./chart.css";

export default function chart(props) {
  return (
    <div>
      <Paper className="chart">
        <LineChart
          className="custom"
          axes
          axisLabels={{ x: "days", y: "values" }}
          style={{ ".label": { fill: "black" }, "background-color": "#A9A9A9",".domain": { fill: "white" } }}
          dataPoints
          grid
          margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
          verticalGrid
          xDomainRange={[1, 7]}
          yDomainRange={[1, 10]}
          width={850}
          height={249}
          lineColors={["blue", "green", "red", "lime", "orange"]}
          interpolate={"cardinal"}
          data={[
            [
              {
                x: 1,
                y:
                  props.keyword1Points !== undefined
                    ? props.keyword1Points.points[0]
                    : 0
              },
              {
                x: 2,
                y:
                  props.keyword1Points !== undefined
                    ? props.keyword1Points.points[1]
                    : 0
              },
              {
                x: 3,
                y:
                  props.keyword1Points !== undefined
                    ? props.keyword1Points.points[2]
                    : 0
              },
              {
                x: 4,
                y:
                  props.keyword1Points !== undefined
                    ? props.keyword1Points.points[3]
                    : 0
              },
              {
                x: 5,
                y:
                  props.keyword1Points !== undefined
                    ? props.keyword1Points.points[4]
                    : 0
              },
              {
                x: 6,
                y:
                  props.keyword1Points !== undefined
                    ? props.keyword1Points.points[5]
                    : 0
              },
              {
                x: 7,
                y:
                  props.keyword1Points !== undefined
                    ? props.keyword1Points.points[6]
                    : 0
              }
            ],
            [
              {
                x: 1,
                y:
                  props.keyword2Points !== undefined
                    ? props.keyword2Points.points[0]
                    : 0
              },
              {
                x: 2,
                y:
                  props.keyword2Points !== undefined
                    ? props.keyword2Points.points[1]
                    : 0
              },
              {
                x: 3,
                y:
                  props.keyword2Points !== undefined
                    ? props.keyword2Points.points[2]
                    : 0
              },
              {
                x: 4,
                y:
                  props.keyword2Points !== undefined
                    ? props.keyword2Points.points[3]
                    : 0
              },
              {
                x: 5,
                y:
                  props.keyword2Points !== undefined
                    ? props.keyword2Points.points[4]
                    : 0
              },
              {
                x: 6,
                y:
                  props.keyword2Points !== undefined
                    ? props.keyword2Points.points[5]
                    : 0
              },
              {
                x: 7,
                y:
                  props.keyword2Points !== undefined
                    ? props.keyword2Points.points[6]
                    : 0
              }
            ],
            [
              {
                x: 1,
                y:
                  props.keyword3Points !== undefined
                    ? props.keyword3Points.points[0]
                    : 0
              },
              {
                x: 2,
                y:
                  props.keyword3Points !== undefined
                    ? props.keyword3Points.points[1]
                    : 0
              },
              {
                x: 3,
                y:
                  props.keyword3Points !== undefined
                    ? props.keyword3Points.points[2]
                    : 0
              },
              {
                x: 4,
                y:
                  props.keyword3Points !== undefined
                    ? props.keyword3Points.points[3]
                    : 0
              },
              {
                x: 5,
                y:
                  props.keyword3Points !== undefined
                    ? props.keyword3Points.points[4]
                    : 0
              },
              {
                x: 6,
                y:
                  props.keyword3Points !== undefined
                    ? props.keyword3Points.points[5]
                    : 0
              },
              {
                x: 7,
                y:
                  props.keyword3Points !== undefined
                    ? props.keyword3Points.points[6]
                    : 0
              }
            ],
            [
              {
                x: 1,
                y:
                  props.keyword4Points !== undefined
                    ? props.keyword4Points.points[0]
                    : 0
              },
              {
                x: 2,
                y:
                  props.keyword4Points !== undefined
                    ? props.keyword4Points.points[1]
                    : 0
              },
              {
                x: 3,
                y:
                  props.keyword4Points !== undefined
                    ? props.keyword4Points.points[2]
                    : 0
              },
              {
                x: 4,
                y:
                  props.keyword4Points !== undefined
                    ? props.keyword4Points.points[3]
                    : 0
              },
              {
                x: 5,
                y:
                  props.keyword4Points !== undefined
                    ? props.keyword4Points.points[4]
                    : 0
              },
              {
                x: 6,
                y:
                  props.keyword4Points !== undefined
                    ? props.keyword4Points.points[5]
                    : 0
              },
              {
                x: 7,
                y:
                  props.keyword4Points !== undefined
                    ? props.keyword4Points.points[6]
                    : 0
              }
            ],
            [
              {
                x: 1,
                y:
                  props.keyword5Points !== undefined
                    ? props.keyword5Points.points[0]
                    : 0
              },
              {
                x: 2,
                y:
                  props.keyword5Points !== undefined
                    ? props.keyword5Points.points[1]
                    : 0
              },
              {
                x: 3,
                y:
                  props.keyword5Points !== undefined
                    ? props.keyword5Points.points[2]
                    : 0
              },
              {
                x: 4,
                y:
                  props.keyword5Points !== undefined
                    ? props.keyword5Points.points[3]
                    : 0
              },
              {
                x: 5,
                y:
                  props.keyword5Points !== undefined
                    ? props.keyword5Points.points[4]
                    : 0
              },
              {
                x: 6,
                y:
                  props.keyword5Points !== undefined
                    ? props.keyword5Points.points[5]
                    : 0
              },
              {
                x: 7,
                y:
                  props.keyword5Points !== undefined
                    ? props.keyword5Points.points[6]
                    : 0
              }
            ]
          ]}
        />
        <div className="keywords">
          <span style={{ color: "blue" }}>keyword1</span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "green" }}>keyword2</span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "red" }}>keyword3</span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "lime" }}>keyword4</span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "orange" }}>keyword5</span>
        </div>
      </Paper>
    </div>
  );
}
