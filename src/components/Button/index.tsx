import React, { type ReactNode } from "react";
import S from "./style.module.css";

//==== TYPES ====//
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: "outline" | "default";
}

export default function Button(props: IButton) {
  const { className, children, variant = "default" } = props;

  return (
    <button {...props} className={`${S.btn} ${S[variant]} ${className}`}>
      {children}
    </button>
  );
}
