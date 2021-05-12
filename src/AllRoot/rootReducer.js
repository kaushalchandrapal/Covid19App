import { combineReducers } from 'redux';
import data from '../Pages/DataPage/reducers/data';

const rootReducer = combineReducers({
    data: data,
    // filterData: filterData,
});

export default rootReducer;