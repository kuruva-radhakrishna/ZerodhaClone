import axios from "axios";

import { createContext,useState , useEffect } from "react";

const userContext = createContext({
    updateUser : (User) => {},
    user : {}
})


export const UserContextProvider = (props) =>{
    const [user,setUser] = useState({
        username:"Radha",
    });
    const updateUser = (newUser) => {
        console.log("Updating user:", newUser);
        setUser(newUser);
        // localStorage.setItem('user', JSON.stringify(newUser));  // Save user to localStorage
    };

    // // On component mount, check if user data exists in localStorage
    // useEffect(() => {
    //     const savedUser = localStorage.getItem('user');
    //     console.log(savedUser);
    //     if (savedUser) {
    //         setUser(JSON.parse(savedUser));  // Load user from localStorage if exists
    //     }
    // }, []);
    
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