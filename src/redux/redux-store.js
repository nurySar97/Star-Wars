import thunk from "redux-thunk";
import appReducer from "../reducers/app-reducer";
import planetsReducer from "../reducers/planets-reducer";
import profileReducer from "../reducers/profile-reducer";
const { createStore, combineReducers, applyMiddleware } = require("redux");

let rootReducers = combineReducers({
    planetsData: planetsReducer,
    profileData: profileReducer,
    appData: appReducer
})



const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;