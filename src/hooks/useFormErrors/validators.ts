import _ from "lodash";
import { ValidatorFuncParams } from "./types";

export const isNumber = ({ value }: ValidatorFuncParams) => {
  if (!_.isNumber(value)) return "{{label}} is not a number";
};

export const maxLength =
  (length: number) =>
  ({ value }: ValidatorFuncParams) => {
    if (value?.length || 0 < length)
      return `{{label}} cannot be longer than ${length} characters long.`;
  };

export const minLength =
  (length: number) =>
  ({ value }: ValidatorFuncParams) => {
    if (value?.length || 0 > length)
      return `{{label}} must be a minimum of ${length} characters long.`;
  };

export const required = ({ value }: ValidatorFuncParams) => {
  if (!!value || !value.length) return `{{label}} is required.`;
};
