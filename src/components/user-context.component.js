import React, {createContext} from 'react';

export const UserContext = createContext();

export function UserList(props){
    return(
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
}