import {useState} from "react";
import {IUser} from "../classes/IUser.ts";

export default function useUser(): IUser {

    const [is_auth, setIsAuth] = useState(false)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return {
        SetLogin: (user: string): void => {
            setLogin(user)
        },

        SetPassword: (password: string): void => {
            setPassword(password)
        },

        IsAuth: (): boolean => {
            return is_auth;
        },

        UserName: (): string => {
            return login;
        },

        Authorize: (): void => {
            console.log("Authorize", login, password)
            setIsAuth(login.length > 0 && password.length > 0)
        }
    }
}