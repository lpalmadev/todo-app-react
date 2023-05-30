import { User } from "."

export interface LoginForm {
    email: string,
    password: string
}

export interface RegisterForm {
    email: string,
    password:string
}

export interface AuthProviderProps {
    children: JSX.Element
}

export interface AuthContextValue {
    signup: (email : string, password: string) => Promise<UserCredential>,
    login: (email : string, password: string) => Promise<UserCredential>,
    logout: () => void,
    signinWithGoogle: () => Promise<UserCredential> ,
    user: User | nulls
}