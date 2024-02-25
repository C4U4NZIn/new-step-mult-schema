"use client";

import { TextField as MuiTextField , TextFieldProps } from "@mui/material";
import { FieldInputProps , useField  } from "formik";

 type FormikTextFieldProps = { name:string } & TextFieldProps;

  type TextFieldConfig = TextFieldProps & FieldInputProps<string>;

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
    height:'1.9rem',
    borderRadius:'5px'
   }}
  
   sx={{ background: 'rgba(237, 237, 237, 1)' }}
   
   />


};

export default FormikInput;