import {combineReducers} from "redux";
import {projectReducers} from "./projectReducers";
import {appReducers} from "./appReducers";

export const rootReducer = combineReducers({
    project: projectReducers,
    app: appReducers
})
