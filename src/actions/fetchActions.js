import {FETCHING_DATA,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE} from './types';
import api from '../api/api';
import apiScore from '../api/apiScore';

export function getData() {
    return {
        type: FETCHING_DATA
    }
}
export function getDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}
export function getDataFailure() {
    return {
        type: FETCH_DATA_FAILURE
    }
}
export function fetchData() {
    return (dispatch) => {
        dispatch(getData())
        api().then((data) => {
            dispatch(getDataSuccess(data))
        })
        .catch((err) => console.log('err:', err))
    }
}
export function fetchDataScore() {
    return (dispatch) => {
        dispatch(getData())
        apiScore().then((data) => {
            dispatch(getDataSuccess(data))
        })
        .catch((err) => console.log('err:', err))
    }
}
