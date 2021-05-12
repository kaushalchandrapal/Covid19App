import * as constant from '../../DataPage/constants';


export function addData(newData){
    return {
        type: constant.ADD_DATA_REQUESTED,
        payload: newData
    }
}

