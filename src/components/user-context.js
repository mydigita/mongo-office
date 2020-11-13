import React, {createContext} from 'react';

export const UserContext = createContext();

export function UserId(props){
    return(
        <UserContext.Provider value={"admin"}>
            {props.children}
        </UserContext.Provider>
    );
}