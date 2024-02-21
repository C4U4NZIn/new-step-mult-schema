"use client";
import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from "@mui/material";
import FormikInput from "../formik-inputs/formikInput";
import { useFormikContext } from "formik";
import { InferType } from 'yup'
import { userSchema } from "./userSchema";
import globalCss from '../../app/(public)/SignUp/css/global.module.css';

 const Page2:FormStepComponentType = (props) => {
    const { errors } = useFormikContext<InferType<typeof userSchema>>();
    const hasErrors = errors.password || errors.confirmPassword;
    {/** Observation:
      1. The name on the FormikInput must be the same name in the initialValues 
      2. that there are in SignUp
   */}
    
    return (
     <div>
        <div className={globalCss.containerInputs}>
        
        <FormikInput name="password" label="Senha" type="password"/>
        <FormikInput name="confirmPassword" label="Confirmar Senha" type="password"/>
        
        </div>    

<Button
    onClick={props.onNext}
    variant="contained"
    disabled={!!hasErrors}
   >
     próximo
    </Button>

    <Button 
    onClick={props.onPrevious}
    variant="contained"
    disabled={!!hasErrors}
    >
        Voltar
    </Button>

    </div>
    )
 }

 export default Page2;