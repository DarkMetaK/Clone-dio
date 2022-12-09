import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import { api } from "../services/api";

import { IUser } from "../types/user";
import { IAuthContext, IAuthContextProvider, ILoginData } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProvider) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>({} as IUser);

    async function handleLogin(loginData: ILoginData) {
    try{
        const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`);
        if(data.length === 1) {
            setUser(data[0]);
            navigate('/feed');
        } else {
            alert('E-mail ou senha inválido')
        }
        } catch(error) {
        alert('Houve algum erro!');
        }
    }

    function handleSignOut() {
        setUser({} as IUser);
    }

    return <AuthContext.Provider value={{user,handleLogin, handleSignOut}}>{children}</AuthContext.Provider>
}