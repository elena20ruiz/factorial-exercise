import EventApi from './Event.js';


const endpoints {
    'getEvents': EventApi.getAll
}

function get(name) {
    return endpoints[name];
}

const ApiFactory = {
    get: get
}

export default ApiFactory;