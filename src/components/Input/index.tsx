
import type { FC, InputHTMLAttributes } from 'react';
import S from "./style.module.css";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    className?: string;
}
const Input: FC<InputProps> = ({ name, label,className, ...rest }) =>{
    return(
        <div className={className}> 
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest}/>
        </div>
    );
};
export default Input;