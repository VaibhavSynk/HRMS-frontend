import { CreateUrl } from "./create-url";
import axios from 'axios';

const strUrl = (endpoint:string) => {
    return CreateUrl(endpoint);
};


const addTokenInHeader = (token: string) => {
    let tokenHeaders: any = {};
    if(token && token !== null && token.length > 0){
        tokenHeaders.Authorization = 'token' + token;
    }
    return tokenHeaders;
}


const commonAxiosService = (dictInfo: any,resolve:any,reject:any) => {
    return axios (dictInfo)
    .then((response) => {
        resolve(response.data);
    })
    .catch((error) => {
        reject(error);
    })
    .then(() => {
        //always executes
    });
}

const GetApiRequest = (endpoint: string,query: any,token:string) => {
     return new Promise((resolve,reject) => {
        let dictInfo = {
            method: 'GET',
            url: strUrl(endpoint),
            params: query,
            headers: {
                "Content-Type": "application/json",
            }
        };
        commonAxiosService(dictInfo,resolve,reject);
     })
};

const PostApiRequest = (endpoint: string,param: any,token:string) => {
    return new Promise((resolve,reject) => {
        // let tokenHeaders: any = addTokenInHeader(token);
       let dictInfo = {
           method: 'POST',
           url: strUrl(endpoint),
           data: JSON.stringify(param),
           headers: { 
               "Content-Type": "application/json",
           }
       };
       commonAxiosService(dictInfo,resolve,reject);
    })
};

const PutApiRequest = (endpoint: string,query: any,token:string) => {
    return new Promise((resolve,reject) => {
       let dictInfo = {
           method: 'PUT',
           url: strUrl(endpoint),
           params: query,
           headers: {
               "Content-Type": "application/json",
           }
       };
       commonAxiosService(dictInfo,resolve,reject);
    })
};
const DeleteApiRequest = (endpoint: string,query: any,token:string) => {
    return new Promise((resolve,reject) => {
       let dictInfo = {
           method: 'DELETE',
           url: strUrl(endpoint),
           params: query,
           headers: {
               "Content-Type": "application/json",
           }
       };
       commonAxiosService(dictInfo,resolve,reject);
    })
};


export const ServiceRequest = {
    GetApiRequest,
    PostApiRequest,
    PutApiRequest,
    DeleteApiRequest
}