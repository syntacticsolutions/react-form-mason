import React from "react";
import { ButtonProps } from "./src/components/Button/types";
import { SelectProps } from "./src/components/Select/types";
import { DropdownProps } from "./src/components/Dropdown/types";
import { FormGeneratorProps } from "./src/components/FormGenerator/types";

export * from "./src/components/Button/types";
export * from "./src/components/Dropdown/types";
export * from "./src/components/FormGenerator/types";
export * from "./src/components/Select/types";
export * from "./src/models/common";
export * from "./src/hooks/useFormErrors/types";

import { ValidatorFn } from "./src/models/common";

import { useFormErrors as ErrorsHook } from "./dist/hooks/useFormErrors/useFormErrors";

import { useFormData as FormDataHook } from "./dist/hooks/useFormData";

export class Button extends React.Component<ButtonProps> {}

export class Input extends React.Component<any> {}

export class Select extends React.Component<SelectProps> {}

export class Dropdown extends React.Component<DropdownProps> {}

export class FormGenerator extends React.Component<FormGeneratorProps<Record<string, any>>> {}

export function useFormErrors(): ReturnType<typeof ErrorsHook>;

export namespace validators {
    export function maxLength (length: number): ValidatorFn
    export function minLength (length: number): ValidatorFn
    export const required: ValidatorFn
    export const isNumber: ValidatorFn
}

export function useFormData(): ReturnType<typeof FormDataHook>;