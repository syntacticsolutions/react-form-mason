import React from "react";

export default function Input(props: any) {
  return (
    <div className="formgen-input-container">
      <input {...props} value={props.value || ""} />
      {props.error && <p className="formgen-error-text">{props.error}</p>}
    </div>
  );
}
