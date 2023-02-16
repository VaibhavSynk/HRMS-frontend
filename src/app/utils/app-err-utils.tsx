const getErrorFromCatch = (err: any) => {
    let strError = "";
    if(err.response && err.response.data && err.response.data.message){
        strError = err.response.data.message;
    }else{
        strError = err.message;
    }
    return strError;
}

export { getErrorFromCatch };