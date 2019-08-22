import * as types from './../../assets/actionTypes';
import { loadState } from '../store/localStorageFile';

const initialState = {
    isFirstTime:true
}

export default isFirstTime = (state=initialState,action)=>{
    console.log("initAppReducer ; ",action);
    switch (action.type) {
        case types.IS_FIRST_TIME:
            const isFirstTime = action.isFirstTime;
            return {
                isFirstTime:isFirstTime
            }
    
        default:
            return state;
    }
}