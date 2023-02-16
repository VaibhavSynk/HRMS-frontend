import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageUtils } from "../../../helper";
import { KeyLocalStorage } from "../../../helper/local-storage";

interface LoginReducerProps {
    isLogin: boolean | false,
    infoLogin: any,
}

const getLocalStorageInfo = LocalStorageUtils.getLocalStorageData(KeyLocalStorage.loginInfo);

let loginInfo = {};

if(getLocalStorageInfo && getLocalStorageInfo !== null  && getLocalStorageInfo.length > 0){
    loginInfo = JSON.parse(getLocalStorageInfo);
}

const initialState: LoginReducerProps = {
     isLogin: Object.keys(loginInfo).length > 0 ? true : false,
     infoLogin: loginInfo
}

export const LoginSlice = createSlice({
    name: 'Login',
    initialState: initialState,
    reducers: {
           actionLogin(state: LoginReducerProps,action){
            LocalStorageUtils.setLocalStorageData(KeyLocalStorage.loginInfo,JSON.stringify(action.payload));
            state.isLogin = true;      
            state.infoLogin = action.payload;
           },
           actionLogOut(state: LoginReducerProps) {
            LocalStorageUtils.removeLocalStorageData(KeyLocalStorage.loginInfo);
              state.isLogin = false;
              state.infoLogin = {}
           }
    }
});

export const { actionLogin,actionLogOut } = LoginSlice.actions;

export default LoginSlice.reducer;