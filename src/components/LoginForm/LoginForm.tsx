import React, { useState } from 'react';
import Input from "../Input";
import Button from "../Button";
import { Form } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    };
    return (
        <form onSubmit={handelSubmit}>
            <Input 
            name='email'
            label='ایمیل'
            type='email'
            placeHolder='ایمیل خود را وارد نمایید.'
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
            <Input 
            name='password'
            label='پسورد'
            type='password'
            placeHolder='پسورد خود را وارد نمایید.'
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <Button type='submit'>Submit</Button>

        </form>

    );
};
export default LoginForm;


