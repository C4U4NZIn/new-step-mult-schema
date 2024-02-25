"use client";

import  { TextFieldInputProps }  from './types/propTypes';
import { Container , Input , Label , TextError } from './styles/inputElements';

 const TextField = ({name ,label,type, textError,error , value , onChange}:TextFieldInputProps) =>{
   return (
     (!error ? (

       <Container>
          <Input name={name} type={type} value={value} onChange={onChange} placeholder=" "/>
          <Label>{label}</Label>
       </Container>

     ):(
        <Container>
        <Input name={name} type={type} value={value} onChange={onChange} placeholder=" "/>
        <Label>{label}</Label>
        <TextError>{textError}</TextError>
       </Container>

     )) 
   )
 }
 export default TextField;