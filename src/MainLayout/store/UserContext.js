import React, { useState } from "react";

export const UserContext = React.createContext({});

 export const   UserContextProvider=({children})=>{
    let [data,setData]=useState({
        isLogedIn:false,
        user:{}
      });
      
    return(
        <UserContext.Provider value={{
            data,
            setData,
        }}>
            {children}
        </UserContext.Provider>

    )
}
