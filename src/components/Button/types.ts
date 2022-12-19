import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: string;
  onClick?: () => void
}

export interface IButtonStyled {
  variant?: string;
}