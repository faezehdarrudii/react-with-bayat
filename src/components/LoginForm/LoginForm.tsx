import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e: React.FormEvent) => {
    alert("READ COMMENT");
    // TODO: IN THIS SECTION WHEN ENTER AN STATIC EMAIL AND SPECEFIC PASSWORD SET IN LOCAL STORAGE AND REDIRECT TO "/"
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <form onSubmit={handelSubmit}>
      <Input
        name="email"
        label="ایمیل"
        type="email"
        placeHolder="ایمیل خود را وارد نمایید."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
