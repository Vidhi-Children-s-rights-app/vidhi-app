
import { Dispatch, SetStateAction } from "react";

export type CloudStateType = 'default' | 'open' | 'closed';
export type CloudStateDispatcher = Dispatch<SetStateAction<CloudStateType>>;

export interface logInType {
    email: string;
    password: string;
}
export interface SignUpType extends logInType {
    name: string;
    age: string;
}
export interface UserType extends SignUpType {
    _id: string;
    completedModules: [],
    preferredLanguage: string,
    coins: number;
    achivements: [];
    phone?: string,
    sex?: string,
}