import {IProject} from "../types/Markets";
import {ADD_NEW_PROJECT, EDIT_NUMBER, FETCH_PROJECTS, REMOVE_FROM_PROJECTS} from "./types";

interface IProjectState {
    projects: IProject[],
    editProject: IProject
}

const initialState: IProjectState = {
    projects: [],
    editProject: {
        number: 0,
        name: '',
        sample: '',
        colorScheme: '',
        url: ''

    }
}

export const projectReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_PROJECTS:
            return {...state, projects: action.payload}
        case ADD_NEW_PROJECT:
            return {...state, projects: [...state.projects, action.payload]}
        case REMOVE_FROM_PROJECTS:
            return {...state, projects: state.projects.filter(p => p !== action.payload)}
        case EDIT_NUMBER:
            return {...state, editProject: action.payload}
        default:
            return state
    }
}
