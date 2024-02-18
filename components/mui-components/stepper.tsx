import { useSearchParams } from "next/navigation";
import { Step, Stepper , StepLabel } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import CheckIcon from '@mui/icons-material/Check';
import MailIcon from '@mui/icons-material/Mail';
import { StepIconProps } from "@mui/material";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import { styled } from '@mui/material/styles';
import React from "react";



const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient(95deg, rgba(2,0,36,1) 0%, rgba(54,54,166,1) 50%, rgba(226,234,236,1) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg, rgba(2,0,36,1) 0%, rgba(54,54,166,1) 50%, rgba(226,234,236,1) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));
  
  const ColorLibStepIconRoot = styled('div')<{
    ownerState :{
        completed?:boolean,
        active?:boolean
    }
  }>(({theme , ownerState}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgba(2,0,36,1) 0%, rgba(54,54,166,1) 50%, rgba(226,234,236,1) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgba(2,0,36,1) 0%, rgba(54,54,166,1) 50%, rgba(226,234,236,1) 100%)',
    }),
  }));


   function ColorLibStepIconComponent(props:StepIconProps){
   
    const { active , completed , className } = props;


    const icons:{[index:string]:React.ReactElement} = {

    1: <PersonOutlineIcon/>,
    2: <MailIcon/>,
    3: <LockIcon/>

    }

    return (
        <ColorLibStepIconRoot ownerState={ {completed , active} } className={className}>
        {icons[String(props.icon)]}
        </ColorLibStepIconRoot>
    )

    

   }




 export default function CustomizedStepperIcon(){
     const searchParams = useSearchParams();
     const page = searchParams.get('step');
     const pageStep =  page ? +page : 1;
     const pageStepIndex = pageStep - 1;
     const steps = ['','','']

   return(
 

      <div>
 
       <Stepper activeStep={pageStepIndex} connector={<ColorlibConnector/>}>
         {
            steps.map((label)=>(
                <Step key={label}>
                <StepLabel StepIconComponent={ColorLibStepIconComponent}>{label}</StepLabel>
                </Step>
            ))
         }
       </Stepper>


      </div>


   );


}

