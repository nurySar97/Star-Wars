import { profileApi } from "../api/api";
const SET_PROFILE = 'SET_PROFILE';
const SET_RESIDENT = 'SET_RESIDENT';
const CLEAR_RESIDENT = 'CLEAR_RESIDENT'

const initialState = {
    profile: null,
    residents: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_RESIDENT:
            return { ...state, residents: [] }
        case SET_RESIDENT:
            return { ...state, residents: [...state.residents, action.payload] }
        case SET_PROFILE:
            return { ...state, profile: action.payload }
        default:
            return state
    }
}


const setProfilesAC = profile => ({ type: SET_PROFILE, payload: profile })
const setResidentAC = resident => ({ type: SET_RESIDENT, payload: resident })
const clearResidentsAC = () => ({ type: CLEAR_RESIDENT })


export const getResidentThunk = id => async dispatch => {
    let response = await profileApi.getResident(id)
    if (response.status === 200) {
        let resident = response.data
        dispatch(setResidentAC(resident))
    }
}



export const clearResidents = () => dispatch => {
    dispatch(clearResidentsAC())
}



export const getPlanetProfileThunk = id => async dispatch => {
    let response = await profileApi.getProfile(id)
    if (response.status === 200) {
        let profile = response.data
        dispatch(setProfilesAC(profile))
    }

}

export default profileReducer;