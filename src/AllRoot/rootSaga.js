import { all } from 'redux-saga/effects';
import dataSaga from '../Pages/DataPage/sagas/dataSaga';
import filterSaga from '../Pages/DataPage/sagas/filterSaga';
import addDataSaga from '../Pages/AddDataPage/sagas/index';

export default function* rootSaga() {
    yield all([
        dataSaga(),
        filterSaga(),
        addDataSaga()
    ]);
}
