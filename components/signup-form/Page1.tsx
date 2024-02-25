"use client";
import { FormStepComponentType } from "./FormTypeStepProps"
import { Button , Box } from '@mui/material'
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
      
    
        
    <Box 
    sx={{
        display:"flex",
        flexDirection:"column",
        gap:2
    }}
    >

        <FormikInput 
        name="email" 
        label="Email" 
        type="text" 
        />
        <FormikInput 
        name="phone" 
        label="Telefone" 
        type="tel" 
        />

        <Box display='flex' flexDirection='row' justifyContent='space-between'>

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
   
    </Box>

        </Box>

        
    
    


     
    )


}

export default Page1;