import { Option } from "../../models/common";

export enum InputTypes {
  STRING = "STRING",
  SELECT = "SELECT",
  OBJECT = "OBJECT",
  ARRAY = "ARRAY",
}

export interface FormGeneratorProps<T extends Record<string, any>> {
  inputTypeMap?: Record<InputTypes, React.FC<any>>;
  config: FGConfig[];
  onUpdated?: (formData: T) => void;
  errors?: Record<string, boolean>;
  formState: T;
  runningPath: string
}

export type FGConfig = InputConfig | SelectConfig | ObjectConfig | ArrayConfig;

type BaseConfig = {
  path: string;
  label: string;
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
}

export interface ArrayConfig {
  config: FGConfig[];
  path: string;
  type: InputTypes.ARRAY;
}
