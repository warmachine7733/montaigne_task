import { getChartData } from "./service";

export const storeChartData = data => ({
  type: "STORE_CHART_DATA",
  data
});

export const callGetChartDataApi = () => {
  return async dispatch => {
    const chartData = await getChartData();
    dispatch(storeChartData(chartData));
  };
};
