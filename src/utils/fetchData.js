import axios from "axios";
import { json } from "react-router-dom";
import jsonData from '../assets/test.json';

export const config = {
    method: 'get',
    headers: {
        'api-key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
    }
};

/**
 * Fetchs data from API.
 * @param {*} url API url
 * @returns Fetched data
 */
export const fetchData = async (config) => {
    const data = axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    // console.log(data.results);
    // return data.results;
}


var myHeaders = new Headers();
myHeaders.append("api-key", "z0g9549K0sn9NxcpaKXoAywsHVRinIPyjnawzlQW6dAzSeCrxKfu");

var requestOptions = {
  method: 'GET',
  mode: 'no-cors',
  headers: myHeaders,
  redirect: 'follow'
};

export const fetchData2 = async (config) => {
    const data = await fetch("https://searchercloudservices.search.windows.net/indexes/index-pdf-demo/docs?api-version=2021-04-30-Preview&search=*", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return data || [];
}
