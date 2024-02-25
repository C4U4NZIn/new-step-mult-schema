export type TextFieldInputProps = {
    name: string;
    type:string;
    label:string;
    error?: boolean;
    textError?:string;
    value?:string;
    onChange?:(event:React.ChangeEvent<HTMLInputElement>)=> void;
 }

