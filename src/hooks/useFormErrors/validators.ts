import _ from "lodash";
import { ValidatorFuncParams } from "./types";

export const isNumber = ({ value }: ValidatorFuncParams) => {
  if (!_.isNumber(value)) return '{{label}} is not a number';
};
