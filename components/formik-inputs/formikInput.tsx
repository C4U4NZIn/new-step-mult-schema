"use client";

import { TextField as MuiTextField , TextFieldProps } from "@mui/material";
import { FieldInputProps , useField  } from "formik";
import TextField from "./textFieldStyled";
import React from "react";
import { TextFieldInputProps } from "./types/propTypes";

 type FormikTextFieldProps = { name:string } & TextFieldProps;
 type TextFieldConfig = TextFieldProps & FieldInputProps<string>;

 type FormikTextFieldInputProps = {name:string} & TextFieldInputProps;
 type TextFieldConfigStyled = TextFieldInputProps & FieldInputProps<any>;


 const FormikInput = ({ name , ...props }:FormikTextFieldProps) => {
     const [field,meta] = useField(name);

     const  newProps : TextFieldConfig = {
     ...field,
     ...props
     }

    {/** verifcate the error in the input field and show to the user */}
   if(meta.error){
    newProps.error = true;
    newProps.helperText = meta.error;
}

   return <MuiTextField 
   
   {...newProps} 
   
   style={{
    flex:1,
    width:'21.5rem',
    height:'1rem',
    borderRadius:'5px'
   }}
  
   sx={{ background: 'rgba(237, 237, 237, 1)' }}
   
   />


};

const FormikStyledInput = ({name , ...props}:FormikTextFieldInputProps) =>{
    const [field , meta] = useField(name);

    const newStyledProps:TextFieldConfigStyled = {
     ...field,
     ...props
    }
    if(meta.error){
     newStyledProps.error = true;
     newStyledProps.textError = meta.error;
    }
   

    return (
         <TextField {...newStyledProps} />
    )



}

export default FormikInput;
export { FormikStyledInput };