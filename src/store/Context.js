import { createContext,useState } from "react";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);


export default function Context({children}) {
    const [user, userSet] = useState('hello')
    
    return (
        <AuthContext.Provider value={{user,userSet}} >
        {children}
        </AuthContext.Provider>
    )

}