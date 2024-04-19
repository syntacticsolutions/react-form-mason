import { ValidatorFn, ValidatorFuncParams } from "../../hooks/useFormErrors/types";
import validators from "../../hooks/useFormErrors/validators";
import { Option } from "../../models/common";

export enum InputTypes {
  STRING = "STRING",
  SELECT = "SELECT",
  OBJECT = "OBJECT",
  // ARRAY = "ARRAY",
}

export interface FormGeneratorProps<T extends Record<string, any>> {
  inputTypeMap?: Record<InputTypes, React.FC<any>>;
  config: FGConfig[];
  onUpdated?: (formData: T) => void;
  errors?: Record<string, boolean>;
  formState: T;
  basePath?: string
}

export type FGConfig = InputConfig | SelectConfig | ObjectConfig; // | ArrayConfig;

type BaseConfig = {
  path: string;
  label: string;
  isValid?: keyof typeof validators
};

export interface InputConfig extends BaseConfig {
  placeholder: string;
  type: InputTypes.STRING
}

export interface SelectConfig extends BaseConfig {
  options: Option[];
  placeholder: string;
  type: InputTypes.SELECT
}

export interface ObjectConfig {
  config: FGConfig[];
  path: string;
  type: InputTypes.OBJECT;
  label: string;
}

// export interface ArrayConfig {
//   config: FGConfig[];
//   path: string;
//   type: InputTypes.ARRAY;
// }

export type ErrorValidatorMap = Record<string, (...funcs: ValidatorFn[]) => (initialValue: ValidatorFuncParams) => Promise<ValidatorFuncParams>>
