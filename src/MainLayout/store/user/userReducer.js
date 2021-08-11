import { SET_USER, SET_TOKEN, SET_LOGED, SET_LOGININ, } from "./userActionConst";

const initialState = {
    user: {},
    isLogginIn: false,
    isLogedIn: false,
    token: '',
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case SET_LOGED:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            };
        case SET_LOGININ:
            return {
                ...state,
                isLoggingIn: action.isLoggingIn,
            };

        default:

            return state
    }
}