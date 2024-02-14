"use client";
import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from '@mui/material';
import { useFormikContext } from "formik";
import FormikInput from "../formik-inputs/formikInput";
import globalCss from '../../app/(public)/SignUp/css/global.module.css';
import { InferType } from "yup";
import { userSchema } from "./userSchema";

  

const Page1:FormStepComponentType = (props) => {
    const { errors } = useFormikContext<InferType<typeof userSchema>>();
    const hasErrors = errors.username || errors.nickname;



    return (
        <div>
       
       <div className={globalCss.containerInputs}>
        
        <FormikInput name="username" label="Name" type="text" />
        <FormikInput name="nickname" label="Nickname" type="text"/>
        
        </div>    


       <Button
       variant="contained"
       onClick={props.onNext}
       disabled ={!!hasErrors}
       >
        Avançar
       </Button>


        </div>
    )
}

export default Page1;