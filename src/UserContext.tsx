import React from "react";


export interface UserContextType {
    user: string;
  
    // this is the type for state setters
    setUser: React.Dispatch<React.SetStateAction<string>>; 
  }

const UserContext = React.createContext({
    user: '',
    setUser: (user: string) => {}, // no-op default setter
});

export default UserContext;