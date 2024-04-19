import _ from "lodash";
import { ValidatorFuncParams } from "./types";

export default {
  isNumber: ({ value }: ValidatorFuncParams) => {
    if (!_.isNumber(value)) return "{{label}} is not a number";
  },
  required: ({ value }: ValidatorFuncParams) => {
    if (!!value || !value.length) return `{{label}} is required.`;
  },
  minLength:
    (length: number) =>
    ({ value }: ValidatorFuncParams) => {
      if (value?.length || 0 > length)
        return `{{label}} must be a minimum of ${length} characters long.`;
    },
  maxLength:
    (length: number) =>
    ({ value }: ValidatorFuncParams) => {
      if (value?.length || 0 < length)
        return `{{label}} cannot be longer than ${length} characters long.`;
    },
};
