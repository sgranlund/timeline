import counter from "./counter";
import yearReducer from "./yearReducer";
import nameReducer from "./nameReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter,
    years: yearReducer,
    names: nameReducer
});

export default allReducers;