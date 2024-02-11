
import { string , object , TypeFromShape } from 'yup';
export const userSchema = object({

    username: string()
    .min(8, "Informe seu nome completo")
    //.matches(/^[a-zA-Z\u00C0-\u00FF ]*$/i)
    .required('Esse campo deve ser preenchido'),

    nickname: string()
    .min(3,"Informe um apelido maior")
    .max(12,"informe um apelido menor")
    //.matches(/^[A-Za-z]+$/i)
    .required('Esse campo deve ser preenchido')
    ,

    email: string()
    .email()
    //.matches(/^[\w.+\-]+@gmail\.com$/)
    .required('Esse campo deve ser preenchido'),

    phone: string()
    .min(1, 'Phone is required')
    .max(20, 'Phone is invalid')
    .required('Esse campo deve ser preenchido corretamente'),
   
    password:  string()
    .min(8,"Your password must be a 8 caracters")
    .required('Esse campo deve ser válido'),
    
    confirmPassword: string()
    .min(8,'Your password must be a 8 caracters')
    .required('Esse campo deve ser preenchido')



});



