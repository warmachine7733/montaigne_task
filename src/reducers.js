/* 
reducers
*/
import { combineReducers } from "redux";
import { chart } from "./components/chart/reducer";
import { table } from "./components/table/reducer";

const rootReducer = combineReducers({
  chart,
  table
});

export default rootReducer;
