import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import { api } from "../services/api";
import { IPost } from "../types/post";

import { IUser, IUserInfo } from "../types/user";
import { IAccountData, IAuthContext, IAuthContextProvider, ILoginData } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProvider) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUserInfo>({} as IUserInfo);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    
    useEffect(() => {
        const storage = localStorage.getItem('loginInfo');
        if(storage) {
          const { login, user } = JSON.parse(storage);
          setIsLoggedIn(login);
          setUser(user);
        }
      }, [])

    async function generateId(): Promise<number | undefined> {
        try {
            const { data } = await api.get('users');
            return data.length + 1;
        }
        catch(error) {
            return undefined;
        }
    }

    async function handleCreateAccount(accountData: IAccountData) {
        try {
            // Verify if email already exists
            const { data } = await api.get(`users?email=${accountData.email}`);
            if(data.length !== 0) {
                alert('Esse e-mail já está cadastrado');
                navigate('/login');
            } else {
                accountData.id = await generateId();
                const response = await api.post('users', JSON.stringify(accountData), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if(response.status === 201) {
                    alert('Conta criada com sucesso');
                    navigate('/login');
                } else {
                    alert('Falha na criação dos dados')
                }
            }
        }
        catch(error) {
            alert('Houve algum erro!');
            console.log(error);
        }
    }

    async function handleLogin(loginData: ILoginData) {
    try{
        const { data } = await api.get<Array<IUser>>(`users?email=${loginData.email}&password=${loginData.password}`);
        if(data.length) {
            const info = {name: data[0].name, email: data[0].email}

            localStorage.setItem('loginInfo', JSON.stringify({
                login: true,
                user: info
            }))

            setUser(info);
            setIsLoggedIn(true);
            navigate('/feed');
        } else {
            alert('E-mail ou senha inválido')
        }
        } catch(error) {
        alert('Houve algum erro!');
        console.log(error);
        }
    }

    function handleSignOut() {
        localStorage.removeItem('loginInfo');
        setUser({} as IUser);
        setIsLoggedIn(false);
    }

    async function loadPosts(): Promise<Array<IPost> | undefined> {
        try {
            const { data } = await api.get("posts");
            return data;
        }
        catch(error) {
            return undefined;
        }
    }

    return <AuthContext.Provider value={{user, isLoggedIn, setIsLoggedIn, handleCreateAccount, handleLogin, handleSignOut, loadPosts}}>{children}</AuthContext.Provider>
}