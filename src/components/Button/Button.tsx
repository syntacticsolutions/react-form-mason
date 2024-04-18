import React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  type = "default",
  size = "small",
  onClick,
  children,
}) => {
  return (
    <button
      className={`formgen-button formgen-button-${type} formgen-button-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
