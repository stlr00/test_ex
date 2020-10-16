import {CREATE_AD, DELETE_AD, GET_ADS} from "./types";

const KEY = 'ads'

const initialState = JSON.parse((localStorage.getItem(KEY))) || []

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_AD: {
            const newState = [action.payload, ...state]
            localStorage.setItem(KEY, JSON.stringify(newState))
            return newState
        }
        case GET_ADS: {
            return state
        }
        case DELETE_AD: {
            const newState = state.filter(ad => ad.id !== action.payload)
            localStorage.setItem(KEY, JSON.stringify(newState))
            return newState
        }
        default: return state
    }
}
