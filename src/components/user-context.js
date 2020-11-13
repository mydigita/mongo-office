import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const AccountUser=(props)=>{ 
    const [userid, setUserid]= useState("");
    return(
        <UserContext.Provider value= {[userid, setUserid]}>
            {props.children}
        </UserContext.Provider>
    );
}