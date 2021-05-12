import * as constant from '../constants/index';


export function filterAction(stateName){
    return {
        type: constant.FILTER_CONDITION_REQUEST,
        payload: stateName
    }
}

