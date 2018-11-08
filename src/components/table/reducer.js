const initialState = {
  tableData: "",
  totalData: 0,
  rowsPerPage: 5,
  limit: 5,
  pageValue: 0,
  offset: 0,
  modData: ""
};

export const table = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_TABLE_DATA":
      return {
        ...state,
        tableData: action.data,
        totalData: action.data.data.length
      };
    case "SET_ROWS_PER_PAGE":
      return {
        ...state,
        rowsPerPage: action.rowsPerPage,
        limit: action.rowsPerPage,
        modData:
          action.data !== undefined
            ? action.data.slice(0, action.rowsPerPage)
            : null
      };

    case "CHANGE_PAGE_VALUE":
      return {
        ...state,
        offset: action.offset,
        limit: action.limit,
        modData:
          action.data !== undefined
            ? action.data.slice(action.offset, action.limit)
            : null
      };
    case "FILTER_DATA":
      return {
        ...state,
        modData: action.data.data.slice(0, 5)
      };
    case "SET_PAGE_VALUE":
      return {
        ...state,
        pageValue: action.data
      };
    default:
      return { ...state };
  }
};
