import React from "react";
import { IPost } from "../types/post";
import { IUserInfo } from "../types/user";

export interface IAuthContext {
    user: IUserInfo;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    handleCreateAccount: (accountData: IAccountData) => Promise<void>;
    handleLogin: (loginData: ILoginData) => Promise<void>;
    handleSignOut: () => void;
    loadPosts: () => Promise<Array<IPost> | undefined>;
}

export interface IAuthContextProvider {
    children: React.ReactNode;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IAccountData {
    id?: number | undefined;
    name: string;
    email: string;
    password: string;
}