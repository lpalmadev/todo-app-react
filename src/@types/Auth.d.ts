import { Auth } from "firebase/auth"
import { User } from "."

export interface LoginForm {
    email: string,
    password: string
}

export interface RegisterForm {
    email: string,
    password: string
}

export interface AuthProviderProps {
    children: JSX.Element
}

export interface AuthContextValue {
    auth: Auth,
    signup: (email: string, password: string) => Promise<UserCredential>,
    login: (email: string, password: string) => Promise<UserCredential>,
    logout: () => Promise<void>,
    signinWithGoogle: () => Promise<UserCredential>,
    user: User | null,
    isLoading: boolean
}