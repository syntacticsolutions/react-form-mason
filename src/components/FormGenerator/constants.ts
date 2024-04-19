import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { FormGenerator } from "./";
import { InputTypes } from "./types";

export const inputMap = {
  [InputTypes.STRING]: Input,
  [InputTypes.SELECT]: Select,
  [InputTypes.OBJECT]: FormGenerator,
  // [InputTypes.ARRAY]: Arry,
};
