import counter from "./counter";
import yearReducer from "./yearReducer";
import nameReducer from "./nameReducer";
import pointsReducer from "./points";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter,
    years: yearReducer,
    names: nameReducer,
    points: pointsReducer
});

export default allReducers;