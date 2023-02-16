const setLocalStorageData = (key,data) => {
    localStorage.setItem(key,data);
}


const getLocalStorageData = (key) => {
    return localStorage.getItem(key);
}

const removeLocalStorageData = (key) => {
    localStorage.removeItem(key);
}

const clearLocalStorageData = () => {
    localStorage.clear();
}


export const LocalStorageUtils = {
    setLocalStorageData,
    getLocalStorageData,
    removeLocalStorageData,
    clearLocalStorageData,
}