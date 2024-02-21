"use client";

import { FormStepComponentType } from "./FormTypeStepProps"
import { useRouter , useSearchParams } from "next/navigation"
import { Formik , Form  }  from 'formik'
import { userSchema } from "./userSchema";
import { InferType } from "yup";
import api from '../../../new-step-mult-schema/services/api/__api';
import { error } from "console";
import { useUserContext } from "@/contexts";
import { Step, StepLabel, Stepper } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import CheckIcon from '@mui/icons-material/Check';
import CustomizedStepperIcon from "../mui-components/stepper";
type userDataFormSchema = InferType<typeof userSchema>;

type Props = {
    steps : FormStepComponentType[];
}


export default function SignUpStepComponent({steps}:Props){

    const router = useRouter();
    {/** can´t put 'use' to the name of variables and objects and stuff */}
    const searchParams = useSearchParams();
    const page = searchParams.get('step');
    {/** ternário de verificação e o valor padrão 1. Também o operador de parse + - number */}
    const pageIndex = page ? +page : 1;
    const StepComponent = steps.at(pageIndex - 1);
    {/** create- its opitional- a verification variable- boolean verification- to have sure of rendering */}
    const isThereStepComponent = !!StepComponent;

    const { createUser } = useUserContext();
 
    
    {/** In next time make a logic to uncessfully void data  */}
    {/* make a short logic in yup to compare the password e the confirmPassword*/}
    const handleSubmitFormik = (data:userDataFormSchema) =>{
        
        const dataValues = {
            username:data.username,
            nickname:data.nickname,
            email:data.email,
            phone:data.phone,
            password:data.password
        }

        createUser(dataValues);

      {/**
           api.post('/post',{

        username: data.username,
        nickname:data.nickname,
        email:data.email,
        phone:data.phone,
        password:data.password

        }).then((resolve)=>{
            console.log(resolve.data);
        }).catch(error=>{
            console.log(error);
        })
       
       
       
        console.log(data);
    */}
    }


    return (
        <div>
        
        {/** Functions that can control the state of component
             In this case, pass the functions as props with important values */
            }  

        {/**
         * We can create a const that represents the length object steps to control to the next or previous step
         */}
       
        <Formik
         
         onSubmit={handleSubmitFormik}
         validationSchema={userSchema}
         initialValues={{
           username:'',
           nickname:'',
           email:'',
           phone: '',
           password:'',
           confirmPassword:''
          }
        }
        >


        <Form>

       {!!isThereStepComponent && (

    
               <div>

                   <CustomizedStepperIcon/>

                   <StepComponent
                  onNext={()=>{
          
                 if((pageIndex < steps.length)){
                 const nextPage = pageIndex + 1;
                 router.push(`/SignUp?step=${nextPage}`);
          
                }
          
                  }}
          
                 onPrevious={()=>{
          
                 if(pageIndex > 1){
                const previousPage = pageIndex-1;
            router.push(`/SignUp?step=${previousPage}`);
          
                 }else{
          
                router.push('/SignUp');
          
                 }
          
          
                    }}
                     
                     />

               </div>
         
         )}

        </Form>
      </Formik>
      </div>
    )
}