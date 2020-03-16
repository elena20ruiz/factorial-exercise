import EventApi from './Event.js';


const endpoints = {
    'getEvents': EventApi.getAll,
    'updateEvent': EventApi.edit,
    'deleteEvent': EventApi.delete,
    'addEvent': EventApi.add
}

function get(name) {
    return endpoints[name];
}

const ApiFactory = {
    get: get
}

export default ApiFactory;