import React from "react"
import { Controller } from "react-hook-form"

import { ErrorText, GeneralContainer, IconContainer, InputContainer, InputText } from "./styles"
import { IInput } from "./types"

function Input({leftIcon, name, errorMessage, control, widthVariant, ...rest}: IInput) {
  return (
    <>
    <GeneralContainer>
      <InputContainer widthVariant={widthVariant}>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller 
          name={name}
          control={control}
          rules={{required: true}}
          render={({field}) => <InputText {...field} {...rest}/>}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}      
    </GeneralContainer>
    </>
  )
}

export default Input