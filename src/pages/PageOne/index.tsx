import React from "react";
import S from "./style.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input"; 
import LoginForm from "../../components/LoginForm/LoginForm";


export default function PageOne() {
  //==== CONSTANTS ====//


  //==== RENDER ====//
  return (
    <div className={S.Container}>
      <h1>Page</h1>
      <LoginForm></LoginForm>
    
    </div>
  );
}
