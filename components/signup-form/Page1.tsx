"use client";
import { FormStepComponentType } from "./FormTypeStepProps"
import { Button , Box} from '@mui/material'
import { useFormikContext } from "formik";
import { InferType } from "yup";
import { userSchema } from "./userSchema";
import { FormikStyledInput } from "../formik-inputs/formikInput";

 
const Page1:FormStepComponentType = (props) => {

     const { errors , values } = useFormikContext<InferType<typeof userSchema>>();
     
    const valuesStateEmail = values.email ===  '';
    const valuesStateFone = values.phone === '';

    const hasEmptyInput = valuesStateEmail || valuesStateFone;

     const hasErrors = errors.email || errors.phone;

    return (
      
    
      <>  
    

       <FormikStyledInput
        name="email" 
        label="Email" 
        type="text"/>

      <FormikStyledInput
        name="phone" 
        label="Telefone" 
        type="tel"/>



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
   
   

        </>

        
    
    


     
    )


}

export default Page1;