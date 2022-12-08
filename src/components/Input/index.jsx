import { Controller } from "react-hook-form"

import { ErrorText, GeneralContainer, IconContainer, InputContainer, InputText } from "./styles"

function Input({leftIcon, name, errorMessage, control, ...rest}) {
  return (
    <>
    <GeneralContainer>
      <InputContainer>
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