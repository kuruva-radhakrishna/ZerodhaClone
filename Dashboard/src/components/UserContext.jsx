import axios from "axios";

import { createContext,useState } from "react";

const userContext = createContext({
    updateUser : (User) => {},
    user : {}
})


export const UserContextProvider = (props) =>{
    const [user,setUser] = useState({
        username:"Radha",
    });
    const updateUser = (User) =>{
        console.log('welcome to updateUSer');
        setUser(User);
        console.log(user);
    }
    return (
        <userContext.Provider value={{
            updateUser : updateUser,
            user : user,
        }}>
            {props.children}
        </userContext.Provider>
    )
}

export default userContext;