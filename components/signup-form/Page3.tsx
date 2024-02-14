"use client";
import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from "@mui/material";
import FormikInput from "../formik-inputs/formikInput";
import { useFormikContext } from "formik";
import { InferType } from 'yup'
import { userSchema } from "./userSchema";
import globalCss from '../../app/(public)/SignUp/css/global.module.css';

 const Page3:FormStepComponentType = (props) => {
    const { errors } = useFormikContext<InferType<typeof userSchema>>();
    const hasErrors = errors.password || errors.confirmPassword;
    {/** Observation:
      1. The name on the FormikInput must be the same name in the initialValues 
      2. that there are in SignUp
   */}
    
    return (
     <div>
        <div className={globalCss.containerInputs}>
        
        <FormikInput name="password" label="Password" type="password"/>
        <FormikInput name="confirmPassword" label="Confirm Password" type="password"/>
        
        </div>    

<Button
    type="submit"
    variant="contained"
    disabled={!!hasErrors}
   >
     Criar Conta
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

 export default Page3;