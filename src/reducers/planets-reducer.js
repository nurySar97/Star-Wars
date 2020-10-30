import { planetsApi } from "../api/api";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PLANETS = 'SET_PLANETS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

const initialState = {
    planets: [],
    currentPage: 1,
    totalPlanetCount: 0,
    isFetching: false
}

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
            return {...state, isFetching: action.payload}
        case SET_TOTAL_COUNT:
            return {...state, totalPlanetCount: action.payload}
        case SET_PLANETS:
            return { ...state, planets: action.payload }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state
    }
}


const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, payload: currentPage })
const setPlanetsAC = planets => ({ type: SET_PLANETS, payload: planets })
const setTotalCountAC = count => ({type: SET_TOTAL_COUNT, payload: count})
const setIsFetchingAC = isFetching => ({type: SET_IS_FETCHING, payload: isFetching})





export const getPlanetsThunk = (currentPage) => async dispatch => {
    dispatch(setIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    let response = await planetsApi.getPlanets(currentPage)
    if (response.status === 200) {
        dispatch(setTotalCountAC(response.data.count))
        let planets = response.data.results
        dispatch(setPlanetsAC(planets))
    }
    dispatch(setIsFetchingAC(false))

}

export default planetsReducer;