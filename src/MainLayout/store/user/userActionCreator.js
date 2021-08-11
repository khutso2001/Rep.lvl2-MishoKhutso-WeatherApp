import {SET_USER,SET_TOKEN,SET_LOGED,SET_LOGININ} from "./userActionConst";
export const  setUser =(user)=>{
    return{
        type:SET_USER,
        token:'ajbsh',
        user,
    }
}
export const  setToken=(token)=>{
    return{
        type:SET_TOKEN,
        token,
    }
}
export const setLogin = (boolean) => {
    return {
        type:SET_LOGED,
        isLoggedIn:boolean,
    }
}

export const setLoginIn = (boolean) => {
    return {
        type:SET_LOGININ,
        isLoggingIn:boolean,
    }
}
