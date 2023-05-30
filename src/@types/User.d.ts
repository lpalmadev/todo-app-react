export interface User {
    displayName: string | null,
    email: string | null,
    photoURL: string | null
}

export interface Response<T>  {
    status: number,
    data: T[] | T,
    error?: string,
}

export interface Request<T> {
    payload: T
}