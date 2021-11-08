import { profileApi } from "../api/api";
const SET_PROFILE = "SET_PROFILE";
const SET_RESIDENTS = "SET_RESIDENTS";
const CLEAR_RESIDENT = "CLEAR_RESIDENT";
const IS_LOADED = "IS__LOADED";

const initialState = {
  profile: null,
  residents: [],
  isLoaded: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADED:
      return { ...state, isLoaded: action.payload };
    case CLEAR_RESIDENT:
      return { ...state, residents: [] };
    case SET_RESIDENTS:
      return { ...state, residents: action.payload };
    case SET_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};

const setProfilesAC = (profile) => ({ type: SET_PROFILE, payload: profile });
const setResidentsAC = (residents) => ({
  type: SET_RESIDENTS,
  payload: residents,
});
const clearResidentsAC = () => ({ type: CLEAR_RESIDENT });
const isLoadedAC = (value) => ({ type: IS_LOADED, payload: value });

export const getResidentThunk = (id) => async (dispatch) => {
  let response = await profileApi.getResident(id);
  if (response.status === 200) {
    let resident = response.data;
    return resident;
  }
};

export const clearResidents = () => (dispatch) => {
  dispatch(clearResidentsAC());
};

export const getPlanetProfileThunk = (id) => async (dispatch) => {
  try {
    dispatch(isLoadedAC(true));
    let response = await profileApi.getProfile(id);
    if (response.status === 200) {
      let profile = response.data;
      dispatch(setProfilesAC(profile));
      let idResidents = profile.residents.map((a) => a.split("/")[5]);
      let residents = [];
      idResidents.forEach(async (resident) => {
        let result = await dispatch(getResidentThunk(resident));
        residents.push(result);
        if (idResidents.length === residents.length) {
          dispatch(setResidentsAC(residents));
        }
      });
    }
    dispatch(isLoadedAC(false));
  } catch (err) {
    console.error(err);
  }
};

export default profileReducer;
