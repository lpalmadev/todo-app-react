import { createContext, useContext, useState } from "react";
import { auth } from "../configurations";
import { GoogleAuthProvider, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContextValue, AuthProviderProps, User } from "../@types";

export const authContext = createContext<AuthContextValue | null>(null);

export const useAuth = () : AuthContextValue => {
    const context = useContext(authContext);
    if(!context) throw new Error ("Thers is not auth provider");
    return context;
}

function AuthProvider({children} : AuthProviderProps){

    const [user, setUser] = useState<User | null>(null)

    const signup = (email : string, password: string) : Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email: string, password: string) : Promise<UserCredential> => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signinWithGoogle = () : Promise<UserCredential>  => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)        
    }
    
    const logout = () : void => {
        signOut(auth)
        setUser(null)
    }

    return(
        <authContext.Provider value={{ signup, login, signinWithGoogle, logout, user }}>
            { children}
        </authContext.Provider>
    )
}

export default AuthProvider;