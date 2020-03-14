const axios = require('axios');

const URL = 'http://localhost:5000'
const ENDPOINT = '/api/event'

const getAll = function() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: URL + ENDPOINT,
        })
        .then((res)=> {
            if(res.text == 'OK') {
                resolve(res.data);
            }
            else {
                reject({
                    code: res.status,
                    data: res.data
                });
            }
        })
        .catch((res)=> {
            reject({
                code: res.status,
                data: res.data
            })
        });
    });
}


const EventApi = {
    getAll: getAll
}


export default EventApi;