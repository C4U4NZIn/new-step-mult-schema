'use client';
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import navegationStyles from '../css/navegation.module.css';
import { number } from "yup";



 const NavegationMultiStepForm = () =>{

    const pathName = usePathname();
    const searchParams = useSearchParams();
    const currentPathNumber = searchParams.get("step");
    
    const currentUserNumberStep = currentPathNumber ? +currentPathNumber : 1;
    //const { query } = routerVerify;
 
     
 
 
    


    return (

        <div className={navegationStyles.containerNavegationSteps}>

            <div 
            className =
            
            {`
            ${navegationStyles.defaultStyles} 
            
            ${navegationStyles.active} 
                  `}>
                <p>Step 1</p>
            </div>

            <div className={`
            
            ${navegationStyles.defaultStyles} 
            ${ currentUserNumberStep >= 2 ? navegationStyles.active : null}
            
            `}>
                <p>Step 2</p>
             
            </div>

            <div className=
            {
                `${navegationStyles.defaultStyles}
                ${ currentUserNumberStep > 2 ? navegationStyles.active : null}
                
                `}>
                <p>step 3</p>
            </div>

        </div>
    )

 }

 export default NavegationMultiStepForm;