import { FormStepComponentType } from "./FormTypeStepProps"
import { Button } from '@mui/material'

const Page2:FormStepComponentType = (props) => {

    return (
        <div>
      <h1>Page2</h1>

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

export default Page2;