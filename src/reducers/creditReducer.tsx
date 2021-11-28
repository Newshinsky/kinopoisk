import { ActionsType } from "../App"

const SET_CREDITS = "SET_CREDITS "


export type defaultStateType = {
    items: any,
    isFetching: boolean,

}

const defaultState = {
    items: [],
    isFetching: false,
}




const CreditReducer = (state: any = defaultState, action: ActionsType) => {
    switch (action.type) {
        case SET_CREDITS:
            return {
                ...state, items: action.payload
            }
        default:
            return state
    }
}


export const setCredits = (credits: any) => {
    return {
        type: SET_CREDITS,
        payload: credits
    }
}



export default CreditReducer

