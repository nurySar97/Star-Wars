import * as Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://swapi.dev/api/'
})