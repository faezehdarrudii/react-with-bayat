import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("")
  const navigate = useNavigate()




  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userLogin=localStorage.getItem("user");
    const userPass= localStorage.getItem("pass");
    if(user==userLogin && password==userPass){
      localStorage.setItem("islogin","true");
     navigate("/")
    }else{
       const errorMessage = "نام کاربری یا پسورد اشتباه است";
      setError(errorMessage)
      alert(errorMessage)
    }  
  };
  return (
    <form onSubmit={handelSubmit}>
      <Input
        name="user"
        label="نام کاربری"
        type="text"
        placeHolder="نام کاربری خود را وارد نمایید."
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <Input
        name="password"
        label="پسورد"
        type="password"
        placeHolder="پسورد خود را وارد نمایید."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default LoginForm;
