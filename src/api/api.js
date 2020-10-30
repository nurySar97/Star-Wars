import * as Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://swapi.dev/api/'
})




export const planetsApi = {
    getPlanets: currentPage => {
        return (
            instance.get(`planets/?page=${currentPage}`)
        )
    }
}


export const profileApi = {
    getProfile: id => {
        return (
            instance.get(`planets/${id}/`)
        )
    }
}