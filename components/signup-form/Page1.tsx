"use client";
import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from '@mui/material'
import FormikInput from "../formik-inputs/formikInput";
import { useFormikContext } from "formik";
import { InferType } from "yup";
import { userSchema } from "./userSchema";

 
const Page1:FormStepComponentType = (props) => {

     const { errors , values } = useFormikContext<InferType<typeof userSchema>>();
     
    const valuesStateEmail = values.email ===  '';
    const valuesStateFone = values.phone === '';

    const hasEmptyInput = valuesStateEmail || valuesStateFone;

     const hasErrors = errors.email || errors.phone;

    return (
        <div>
      
      <div>
        
        <FormikInput name="email" label="Email" type="text"/>
        <FormikInput name="phone" label="Telefone" type="tel"/>
        
        </div>    
    

    <Button
    onClick={props.onNext}
    variant="contained"
    disabled = {!!hasEmptyInput || !!hasErrors}
    >
        Próximo
    </Button>

    <Button 
    onClick={props.onPrevious}
    variant="contained"
    disabled={(!!hasEmptyInput || !!hasErrors)}
    >
        Voltar
    </Button>

        </div>
    )


}

export default Page1;