import { profileApi } from "../api/api"
const SET_PROFILE = 'SET_PROFILE'

const initialState = {
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, profile: action.payload}
        default:
            return state
    }
}


const setProfilesAC = profile => ({ type: SET_PROFILE, payload: profile })





export const getPlanetProfileThunk = id => async dispatch => {
    let response = await profileApi.getProfile(id)
    if (response.status === 200) {
        let profile = response.data
        dispatch(setProfilesAC(profile))
    }

}

export default profileReducer;