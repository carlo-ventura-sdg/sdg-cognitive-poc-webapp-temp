// Fetch options
export const options = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        'api-key': "z0g9549K0sn9NxcpaKXoAywsHVRinIPyjnawzlQW6dAzSeCrxKfu" //process.env.API_KEY
    }
};

/**
 * Fetchs data from API.
 * @param {*} url API url
 * @returns Fetched data
 */
export const fetchData = async (url) => {
    const data = await fetch(url, options)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));

    console.log(data.results);
    return data.results;
}