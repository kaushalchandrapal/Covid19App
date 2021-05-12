import { put, takeEvery, select } from 'redux-saga/effects';
import * as constant from '../../DataPage/constants/index'


function* addData(action){
    try {
        const data = yield select(state => state.data.data);
        data.push(action.payload);
        console.log(data);
        yield put({ type: constant.ADD_DATA_SUCCESS, data: data });
    } catch (error) {
        yield put({ type: constant.ADD_DATA_ERROR, message: error.message });
    }
}

function* addDataSaga(){
    yield takeEvery(constant.ADD_DATA_REQUESTED, addData);
}

export default addDataSaga;