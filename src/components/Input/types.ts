import React from "react";
import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    control?: any;
    leftIcon?: React.ReactNode;
    errorMessage?: string | null;
    widthVariant?: string;
}

export interface IInputStyled {
    widthVariant?: string;
}