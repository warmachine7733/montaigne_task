import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./table.css";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#A9A9A9",
    color: "white"
  },
  body: {
    fontSize: 12,
    overflowX: "auto",
    backgroundColor: "white",
    width: 400
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "20%",
    marginTop: theme.spacing.unit * 2,
    overflowX: "auto"
  },
  table: {
    width: 400
  },
  row: {
    "&:nth-of-type(even)": {
      backgroundColor: "#ff4400"
    }
  }
});

function table(props) {
  return (
    <div>
      <div className="pdng24Block">
        <Paper>
          <Table>
            <TableHead className="head">
              <TableRow>
                <CustomTableCell>keywords</CustomTableCell>
                <CustomTableCell>position</CustomTableCell>
                <CustomTableCell>change</CustomTableCell>
                <CustomTableCell>url</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.modData !== "" ? (
                props.modData.map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <CustomTableCell className="CustomTableCell">
                        {data.keyword}
                      </CustomTableCell>
                      <CustomTableCell>{data.position}</CustomTableCell>
                      <CustomTableCell>
                        {data.change > 0 ? (
                          <span>
                            {data.change} &nbsp;
                            <i className="fa fa-chevron-up up_arrow" />
                          </span>
                        ) : (
                          <span>
                            {data.change} &nbsp;
                            <i className="fa fa-chevron-down down_arrow" />
                          </span>
                        )}
                      </CustomTableCell>
                      <CustomTableCell>....</CustomTableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell>noData</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
}

export default withStyles(styles)(table);
