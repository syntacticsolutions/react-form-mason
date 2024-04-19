import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string
}

export function FGInput({children, ...props}: InputProps) {
  return (
    <div className="formgen-input-container">
      <input {...props} value={props.value || ""} />
      {children}
      {props.error && <p className="formgen-error-text">{props.error}</p>}
    </div>
  );
}
