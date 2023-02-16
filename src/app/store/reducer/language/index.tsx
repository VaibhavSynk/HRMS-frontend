import { createSlice } from "@reduxjs/toolkit";

interface languageProps {
    appString: any | "en";
    languageCode: string
}

const initialStates: languageProps  = {
    appString: require(`../../../strings/en.json`),
    languageCode: "en"
};

const LanguageSlice = createSlice({
    name: 'language',
    initialState: initialStates,
    reducers: {
        actionChangeLanguage(state: any,action:any) {
            state.appString = require(`../../../strings/${action.payload}.json`);
        }
    }
});

export const { actionChangeLanguage } = LanguageSlice.actions;

export default LanguageSlice.reducer;