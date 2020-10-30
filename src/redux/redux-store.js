import thunk from "redux-thunk";
import planetsReducer from "../reducers/planets-reducer";
import profileReducer from "../reducers/profile-reducer";




const { createStore, combineReducers, applyMiddleware } = require("redux");

let rootReducers = combineReducers({
    planetsData: planetsReducer,
    profileData: profileReducer
})



const store = createStore(rootReducers, applyMiddleware(thunk));
window.store = store
export default store;