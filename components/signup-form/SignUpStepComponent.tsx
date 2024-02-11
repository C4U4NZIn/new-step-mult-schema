"use client";

import { FormStepComponentType } from "./FormTypeStepProps"
import { useRouter , useSearchParams } from "next/navigation"
import { Formik , Form }  from 'formik'


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
    
    return (
        <div>
        
        {/** Functions that can control the state of component
             In this case, pass the functions as props with important values */
            }  

        {/**
         * We can create a const that represents the length object steps to control to the next or previous step
         */}
       
        <Formik
         
         onSubmit={(values:any)=>{
            console.log(values);
         }}
         initialValues={
          {

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
        )}

        </Form>


        </Formik>

        
        </div>
    )
}