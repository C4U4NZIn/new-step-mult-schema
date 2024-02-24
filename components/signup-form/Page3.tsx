"use client";
import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from '@mui/material';
import { useFormikContext } from "formik";
import FormikInput from "../formik-inputs/formikInput";
import globalCss from '../../app/(public)/SignUp/css/global.module.css';
import { InferType } from "yup";
import { userSchema } from "./userSchema";

  

const Page3:FormStepComponentType = (props) => {
    const { errors , values } = useFormikContext<InferType<typeof userSchema>>();
    const hasErrors = errors.username || errors.nickname;
    const isEmptyUsernameInput = values.username === '';
    const isEmptyNicknameInput = values.nickname === '';
    const hasEmptyInput = isEmptyUsernameInput || isEmptyNicknameInput;
    

    return (
        <div>
       
       <div className={globalCss.containerInputs}>
        
        <FormikInput name="username" label="Nome" type="text" />
        <FormikInput name="nickname" label="Apelido" type="text"/>
        
        </div>    


       <Button
       type="submit"
       variant="contained"
       disabled ={!!hasErrors || !!hasEmptyInput}
       >
        Criar Conta
       </Button>

       <Button
       onClick={props.onPrevious}
       variant="contained"
       disabled = {!!hasErrors || !!hasEmptyInput}
     >
       Voltar
       </Button>


        </div>
    )
}

export default Page3;