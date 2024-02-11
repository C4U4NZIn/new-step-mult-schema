"use client";
import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from '@mui/material'
import FormikInput from "../formik-inputs/formikInput";
import { useFormikContext } from "formik";
import { InferType } from "yup";
import { userSchema } from "./userSchema";

const Page2:FormStepComponentType = (props) => {

     const { errors } = useFormikContext<InferType<typeof userSchema>>();
     const hasErrors = errors.email || errors.phone;

    return (
        <div>
      
      <div>
        
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