"use client";
import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from '@mui/material'
import FormikInput from "../formik-inputs/formikInput";
import { useFormikContext } from "formik";
import { InferType } from "yup";
import { userSchema } from "./userSchema";
import globalCss from '../../app/(public)/SignUp/css/global.module.css';

const Page2:FormStepComponentType = (props) => {

     const { errors } = useFormikContext<InferType<typeof userSchema>>();
     const hasErrors = errors.email || errors.phone;

    return (
        <div>
      
      <div className={globalCss.containerInputs}>
        
        <FormikInput name="email" label="Email" type="text"/>
        <FormikInput name="phone" label="Telephone" type="tel"/>
        
        </div>    
    

    <Button
    onClick={props.onNext}
    variant="contained"
    disabled = {!!hasErrors}
    >
        Avançar 
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