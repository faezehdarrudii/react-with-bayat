import React from "react";
import S from "./style.module.css";
import Button from "../../components/Button";

export default function PageOne() {
  //==== CONSTANTS ====//

  //==== RENDER ====//
  return (
    <div className={S.Container}>
      <h1>Page</h1>

      <Button onClick={console.log} className={S.darrudi}>
        MY BUTTON
      </Button>

      <Button variant="outline">DDD</Button>
    </div>
  );
}
