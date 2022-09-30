/**
 * Saves data in local storage.
 * @param {*} data Data to be saved
 * @param {*} key Local storage key
 */
export const saveLocalData = (data, key) => {
    localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Loads data from local storage.
 * @param {*} key Local storage key
 * @returns Data loaded from local store
 */
export const loadLocalData = (key) => {
    const dataObj = localStorage.getItem(key);
    return JSON.parse(dataObj);
};

/**
 * Clears data in local storage.
 * @param {*} key Local storage key
 */
export const clearLocalData = (key) => {
    localStorage.clear(key);
};