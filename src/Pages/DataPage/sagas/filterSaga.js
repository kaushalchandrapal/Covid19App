import { call, put, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';
import * as constant from '../constants/index'


function* fetchFilterData(action){
    try {
        const data = yield select(state => state.data.data);
        const dataToTable = data.filter(d => {
            if(d.state===action.payload){
                return d;
            }
        });
        yield put({ type: constant.FILTER_CONDITION_SUCCESS, data: data, dataToTable: dataToTable });
    } catch (error) {
        yield put({ type: constant.FILTER_CONDITION_ERROR, message: error.message });
    }
}

function* filterSaga(){
    yield takeEvery(constant.FILTER_CONDITION_REQUEST, fetchFilterData);
}

export default filterSaga;