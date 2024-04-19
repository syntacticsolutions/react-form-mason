import React from "react";
import { ButtonProps } from "./src/components/Button/types.js";
import { SelectProps } from "./src/components/Select/types.js";
import { DropdownProps } from "./src/components/Dropdown/types.js";
import { FormGeneratorProps } from "./src/components/FormGenerator/types.js";

import { ValidatorFn } from "./src/hooks/useFormErrors/types";

import { useFormErrors as ErrorsHook } from "./dist/hooks/useFormErrors/useFormErrors.js";

import { useFormData as FormDataHook } from "./dist/index.js";

export * from "./src/components/Button/types.js";
export * from "./src/components/Dropdown/types.js";
export * from "./src/components/FormGenerator/types.js";
export { inputMap } from "./src/components/FormGenerator/FormGenerator.js";
export * from "./src/components/Select/types.js";
export * from "./src/hooks/useFormErrors/types.js";
export * from "./src/models/common.js";

export class Button extends React.Component<ButtonProps> {}

export class Input extends React.Component<any> {}

export class Select extends React.Component<SelectProps> {}

export class Dropdown extends React.Component<DropdownProps> {}

export class FormGenerator extends React.Component<
  FormGeneratorProps<Record<string, any>>
> {}

export function useFormErrors(): ReturnType<typeof ErrorsHook>;

export namespace validators {
  export function maxLength(length: number): ValidatorFn;
  export function minLength(length: number): ValidatorFn;
  export const required: ValidatorFn;
  export const isNumber: ValidatorFn;
}

export function useFormData(
  state: Record<string, any>,
  onChange: (data: Record<string, any>) => void
): ReturnType<typeof FormDataHook>;
