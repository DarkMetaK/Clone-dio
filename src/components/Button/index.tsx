import React from "react";
import { ButtonContainer } from "./styles";

import { IButton } from './types';

function Button({title, variant='primary', disabled, onClick}: IButton) {
  return (
    <ButtonContainer
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
        {title}
    </ButtonContainer>
  )
}

export default Button;