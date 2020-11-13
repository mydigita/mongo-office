import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const AccountUser=(props)=>{ 
    const [userid, setUserid]= useState("");
    const [user, setUser] = useState("");
    return(
        <UserContext.Provider value= {[userid, setUserid, user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}