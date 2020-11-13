import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export function UserId(props){
    const [userid] =  useState("");
    return(
        <UserContext.Provider value={"admin"}>
            {props.children}
        </UserContext.Provider>
    );
}