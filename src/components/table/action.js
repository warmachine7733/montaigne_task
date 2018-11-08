import { getData } from "./service";

export const storeTableData = data => {
  return {
    type: "STORE_TABLE_DATA",
    data
  };
};
export const handleChangeRowsPerPage = (rowsPerPage, data) => ({
  type: "SET_ROWS_PER_PAGE",
  rowsPerPage,
  data
});
export const handlePageChange = (offset, limit, data) => ({
  type: "CHANGE_PAGE_VALUE",
  offset,
  limit,
  data
});
export const filterData = data => ({
  type: "FILTER_DATA",
  data
});

export const setPageValue = data => ({
  type: "SET_PAGE_VALUE",
  data
});

export const getTableData = () => {
  return async dispatch => {
    const processedData = await getData();
    dispatch(filterData(processedData));
    dispatch(storeTableData(processedData));
  };
};
