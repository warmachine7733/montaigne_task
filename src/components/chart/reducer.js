const initialState = {
  chartData: ""
};

export const chart = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_CHART_DATA":
      return {
        ...state,
        chartData: action.data
      };

    default:
      return { ...state };
  }
};
