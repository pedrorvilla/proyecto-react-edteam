import {createContext, useEffect, useState} from "react";

const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            name: 'Jose Pedro',
            date: '18/07/2023'
        });
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext, UserContextProvider}
