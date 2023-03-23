import {EDIT_NUMBER, HIDE_EDIT_POPUP, HIDE_LOADER, SHOW_EDIT_POPUP, SHOW_LOADER} from "./types";

interface IAppState {
    loading: boolean
    showEditPopup: boolean

}

const initialState: IAppState = {
    loading: false,
    showEditPopup: false,
}

export const appReducers = (state =  initialState, action: any) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_EDIT_POPUP:
            return {...state, showEditPopup: true}
        case HIDE_EDIT_POPUP:
            return {...state, showEditPopup: false}
        default:
            return state
    }
}
