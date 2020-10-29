import thunk from "redux-thunk";
import planetsReducer from "../reducers/planets-reducer";




const { createStore, combineReducers, applyMiddleware } = require("redux");

let rootReducers = combineReducers({
    planetsData: planetsReducer
})



const store = createStore(rootReducers, applyMiddleware(thunk));
window.store = store
export default store;