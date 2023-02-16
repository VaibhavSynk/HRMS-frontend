import { configureStore } from "@reduxjs/toolkit";
import { LanguageReducer, LoginReducer } from "./reducer";

export const Store = configureStore({
    reducer: {
          login: LoginReducer,
          language: LanguageReducer
    }
})