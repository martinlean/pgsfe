import React from "react";
import { Button as ButtonDefault } from "./ui/button";

type ButtonProps = {
  variant?: "outline";
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, className, children }) => {
  return (
    <ButtonDefault className={className} variant={variant}>
      {children}
    </ButtonDefault>
  );
};

export default Button;
