
import { string , object , TypeFromShape , ref } from 'yup';
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
    .min(1, 'O telefone é inválido')
    .max(20, 'O telefone é inválido')
    .required('Esse campo deve ser preenchido corretamente'),
   
    password:  string()
    .min(8,"Sua senha deve ter no mínimo 8 caracteres")
    .required('Esse campo deve ser válido')
    .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "Sua senha deve conter pelo menos um caracter em caixa alta , caixa baixa e um caracter númerico"),
    
    confirmPassword: string()
    .oneOf([ref('password')],'Os valores devem ser iguais')
    .required('Sua senha deve ter no mínimo 8 caracteres')
    .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Sua senha deve conter pelo menos um caracter em caixa alta , caixa baixa e um caracter númerico")



});



