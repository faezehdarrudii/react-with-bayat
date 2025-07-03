import React from "react";
import S from "./style.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input"; 

export default function PageOne() {
  //==== CONSTANTS ====//
  const inputProps ={name:"email",label:"ایمیل",className:"input",placeHolder:'ایمیل خود را وارد نمایید.'};

  //==== RENDER ====//
  return (
    <div className={S.Container}>
      <h1>Page</h1>

      <Button onClick={console.log} className={S.darrudi}>
        MY BUTTON
      </Button>

      <Button variant="outline">DDD</Button>
      
      <Input {...inputProps}></Input>

    </div>
  );
}
