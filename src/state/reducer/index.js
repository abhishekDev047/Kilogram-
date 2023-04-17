import { combineReducers } from "redux";
import userReducer from "./userReducer";

const  reducers = combineReducers({
    userId : userReducer
});

export default reducers;