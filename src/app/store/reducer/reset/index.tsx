import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageUtils } from "../../../helper";
import { KeyLocalStorage } from "../../../helper/local-storage";

interface ResetReducerProps {
    isLogin: boolean | false,
    infoLogin: any,
}

const getLocalStorageInfo = LocalStorageUtils.getLocalStorageData(KeyLocalStorage.loginInfo);

let resetInfo = {};

if(getLocalStorageInfo && getLocalStorageInfo !== null  && getLocalStorageInfo.length > 0){
    resetInfo = JSON.parse(getLocalStorageInfo);
}

const initialState: ResetReducerProps = {
    
     isLogin: Object.keys(resetInfo).length > 0 ? true : false,
     infoLogin: resetInfo
}

export const LoginSlice = createSlice({
    name: 'Login',
    initialState: initialState,
    reducers: {
           actionReset(state: ResetReducerProps,action){
            LocalStorageUtils.setLocalStorageData(KeyLocalStorage.loginInfo,JSON.stringify(action.payload));
            state.isLogin = true;      
            state.infoLogin = action.payload;
           }
    }
});

export const { actionReset } = LoginSlice.actions;

export default LoginSlice.reducer;