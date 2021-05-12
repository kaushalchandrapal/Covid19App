import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const apiUrl = `https://api.covid19india.org/data.json`;

function* fetchData(action){
    try {
        const response = yield call(()=>axios.get(apiUrl));
        const data = response.data.statewise;
        // console.log(data);
        yield put({ type: 'GET_DATA_SUCCESS', data: data });
    } catch (error) {
        yield put({ type: 'GET_DATA_FAILED', message: error.message });
    }
}

function* dataSaga(){
    yield takeEvery('GET_DATA_REQUESTED', fetchData);
}

export default dataSaga;