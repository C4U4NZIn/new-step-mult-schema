import Page1 from "@/components/signup-form/Page1";
import Page2 from "@/components/signup-form/Page2";
import Page3 from "@/components/signup-form/Page3";
import SignUpStepComponent from "@/components/signup-form/SignUpStepComponent";
import React from "react";
import styles from './css/SignUp.module.css';
import NavegationMultiStepForm from "./components/navegation";

export default function SignUp(){

   return (
      

   <div>

    <div>
    <NavegationMultiStepForm/>
    </div>
      
      <div className={`${styles.main} ${styles.backgroundMain}`}>
   <SignUpStepComponent steps={[Page1,Page2,Page3]}/>
   </div>

   </div>
   
   
   

  
   )

}