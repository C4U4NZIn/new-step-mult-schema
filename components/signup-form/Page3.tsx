import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from "@mui/material";

 const Page3:FormStepComponentType = (props) => {
    return (
    <div>

    <h1>Page3</h1>

<Button
    onClick={props.onNext}
    >
        Avançar 
    </Button>

    <Button 
    onClick={props.onPrevious}
    >
        Voltar
    </Button>

    </div>
    )
 }

 export default Page3;