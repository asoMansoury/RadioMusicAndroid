import * as types from './../../assets/actionTypes';

export const setIsFirstTime =  (isFirstTime)=>({
    type:types.IS_FIRST_TIME,
    isFirstTime:isFirstTime
})