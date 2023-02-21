import { isProduction } from "../../utils";

export const APIUrl = 'api';
export const BaseUrl = isProduction ? 'http://192.168.1.137:8001/' : 'http://192.168.1.137:8001/';

const auth = {
    login: '/user-login/',
    signup: '/registration/',
    forgotPassword: "/forgot-password-send-otp/",
    verifyOtp: "/verify-otp/",
    setPassword: "/set-password/",
}

const endPoint = {
    auth,
};

export { endPoint };