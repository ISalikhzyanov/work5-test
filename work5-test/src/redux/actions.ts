import {IProject} from "../types/Markets";
import {
    ADD_NEW_PROJECT, EDIT_NUMBER,
    FETCH_PROJECTS, HIDE_EDIT_POPUP,
    HIDE_LOADER,
    REMOVE_FROM_PROJECTS,
    SHOW_EDIT_POPUP,
    SHOW_LOADER
} from "./types";

export function addNewProject(project: IProject) {
    return {
        type: ADD_NEW_PROJECT,
        payload: project
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function removeFromProjects(project: IProject) {
    return {
        type: REMOVE_FROM_PROJECTS,
        payload: project
    }
}

export function showEditPopup() {
    return {
        type: SHOW_EDIT_POPUP
    }
}

export function getEditProject(item: IProject){
    return {
        type: EDIT_NUMBER,
        payload: item
    }
}

export function hideEditPopup() {
    return {
        type: HIDE_EDIT_POPUP
    }
}

export function fetchProjects() {
   return async (dispatch: any) => {
       dispatch(showLoader())
        await projects.getData()
           .then((r:Awaited<any>)=>{
           setTimeout(()=>{
               dispatch({
                   type: FETCH_PROJECTS,
                   payload: r.data
               })
               dispatch(hideLoader())
           }, 3000)
       })
   }
}

const projects = {
    getData: () => {
        return Promise.resolve({
            data: [
                {
                    number: 1234,
                    name: 'Дипломная работа',
                    sample: 'Стандартный',
                    colorScheme: 'Класическая',
                    url: 'http://www.work5.ru/services'
                },
                {
                    number: 1243,
                    name: 'Дипломная работа',
                    sample: 'Стандартный',
                    colorScheme: 'Класическая',
                    url: 'http://www.work5.ru/services'
                }
            ]
        })
    }
}
