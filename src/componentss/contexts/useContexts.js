import { createContext } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {
  

    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}
