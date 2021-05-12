import * as constant from '../constants/index';

const initialState = {
    data: [],
    dataToTable: [],
    loading: false,
    error: null
}

export default function data(state = initialState, action) {
    switch(action.type){
        case constant.GET_DATA_REQUESTED: 
            return {
                ...state,
                loading: true
            }
        
        case constant.GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                dataToTable: action.data
            }

        case constant.GET_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }

        
        case constant.FILTER_CONDITION_REQUEST: 
            return {
                ...state,
                loading: true
            }
        
        case constant.FILTER_CONDITION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                dataToTable: action.dataToTable
            }

        case constant.FILTER_CONDITION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        
        case constant.ADD_DATA_REQUESTED: 
            return {
                ...state,
                loading: true
            }
        
        case constant.ADD_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data,
                dataToTable: action.data
            }

        case constant.ADD_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.message
            }

        default : 
            return state
    }
}

