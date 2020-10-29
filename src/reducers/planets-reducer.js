import { planetsApi } from "../api/api";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PLANETS = 'SET_PLANETS';

const initialState = {
    planets: [],
    currentPage: 1
}

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLANETS:
            return { ...state, planets: action.planets }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        default:
            return state
    }
}


const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
const setPlanetsAC = planets => ({ type: SET_PLANETS, planets })





export const getPlanetsThunkCreator = (currentPage) => async dispatch => {
    dispatch(setCurrentPageAC(currentPage))
    let response = await planetsApi.getPlanets(currentPage)
    console.log(response)
    if (response.status === 200) {
        let planets = response.data.results
        dispatch(setPlanetsAC(planets))
    }

}

export default planetsReducer;