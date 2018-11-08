import React, { Component } from "react";

// import Table from "../pagination/index";
import { connect } from "react-redux";
import * as TableAction from "./action";
import { bindActionCreators } from "redux";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "./table";
import "./table.css";

class TableContainer extends Component {
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
    this.props.action.handleChangeRowsPerPage(
      event.target.value,
      this.props.data
    );
    this.props.action.setPageValue(0);
  };

  handleChangePage = (event, page) => {
    this.props.action.setPageValue(page);
    this.props.action.handlePageChange(
      this.props.rowsPerPage * page,
      this.props.rowsPerPage * page + this.props.rowsPerPage,
      this.props.data
    );
  };
  render() {
    return (
      <div className="tablePosition">
        <Table {...this.props} />
        <TablePagination
          component="div"
          count={this.props.length}
          rowsPerPage={this.props.rowsPerPage}
          page={this.props.pageValue}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
  componentDidMount() {
    this.props.action.getTableData();
  }
}
const mapStateToProps = state => {
  return {
    data: state.table.tableData.data,
    length: state.table.totalData,
    rowsPerPage: state.table.rowsPerPage,
    limit: state.table.limit,
    offset: state.table.offset,
    modData: state.table.modData,
    pageValue: state.table.pageValue
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(TableAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer);
