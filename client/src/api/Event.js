const axios = require('axios');

const URL = 'http://localhost:5000'
const ENDPOINT = '/api/event'

const getAll = function() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: URL + ENDPOINT,
        })
        .then(function(res) {
            if(res.statusText === 'OK') {
                resolve(res.data);
            }
            else {
                reject({
                    code: res.status,
                    data: res.data
                });
            }
        })
        .catch(function(res) {
            console.log('error');
            console.log(res);
            reject({
                code: res.status,
                data: res.data
            })
        });
    });
}

const add = function(data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: URL + ENDPOINT,
            data: data
        })
        .then((res)=> {
            if(res.statusText === 'OK') {
                resolve('Correctly added');
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

const edit = function(data) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: URL + ENDPOINT,
            data: data
        })
        .then((res)=> {
            if(res.statusText === 'OK') {
                resolve('Correctly updated');
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

const deleteEvent = function(eventId) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'delete',
            url: URL + ENDPOINT,
            params: {
                id: eventId
            }
        })
        .then((res)=> {
            if(res.statusText === 'OK') {
                resolve('Correctly updated');
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
    getAll: getAll,
    add: add,
    edit: edit,
    delete: deleteEvent
}


export default EventApi;