import Page1 from "@/components/signup-form/Page1";
import Page2 from "@/components/signup-form/Page2";
import Page3 from "@/components/signup-form/Page3";
import SignUpStepComponent from "@/components/signup-form/SignUpStepComponent";
import React from "react";
import styles from './css/SignUp.module.css';


export default function SignUp(){

   return (
      

   <div>

      <div className={styles.main}>
      <SignUpStepComponent steps={[Page1,Page2,Page3]}/>
      </div>

   </div>
   
   
   

  
   )

}