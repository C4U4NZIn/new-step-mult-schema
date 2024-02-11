import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from '@mui/material';

const Page1:FormStepComponentType = (props) => {

    return (
        <div>
       
    


      <h1>Page 1</h1>
       <Button
       onClick={props.onNext}
       >
        Avançar
       </Button>


        </div>
    )
}

export default Page1;