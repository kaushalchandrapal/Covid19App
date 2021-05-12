import { combineReducers } from 'redux';
import data from '../Pages/DataPage/reducers/data';
import filterData from '../Pages/DataPage/reducers/filterReducer';

const rootReducer = combineReducers({
    data: data,
    // filterData: filterData,
});

export default rootReducer;