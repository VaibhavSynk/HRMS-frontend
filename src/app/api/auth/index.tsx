import { ServiceRequest } from "../../helper";
import { endPoint } from "../../helper/rest-api/url-schema";
import { getErrorFromCatch } from "../../utils"; 



const apiCallLogin = (reqBody: any) => {
    return new Promise((resolve,reject) => {
         ServiceRequest.PostApiRequest(endPoint.auth.login,reqBody,"")
         .then((res: any) => {
            if(!res.error){
                resolve(res);
            }else{
                reject(res);
            }
         })
         .catch((err:any) => {
            reject(getErrorFromCatch(err))
         })
    })
}

const apiCallSendOtp = (reqBody: any) => {
    return new Promise((resolve,reject) => {
         ServiceRequest.PostApiRequest(endPoint.auth.forgotPassword,reqBody,"")
         .then((res: any) => {
            if(!res.error){
                resolve(res);
            }else{
                reject(res);
            }
         })
         .catch((err:any) => {
            reject(getErrorFromCatch(err))
         })
    })
}

const AuthApi =  {
    apiCallLogin,apiCallSendOtp,
}


export { AuthApi };