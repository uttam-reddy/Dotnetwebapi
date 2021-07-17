import {applyMiddleware, createStore} from "redux";
import UserReducer from "../reducers/UserReducer";
import thunk from "redux-thunk"

const store=createStore(UserReducer,applyMiddleware(thunk));


export default store;