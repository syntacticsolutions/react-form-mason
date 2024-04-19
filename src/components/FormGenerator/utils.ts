import {
    ErrorValidatorMap,
  ValidatorFn,
} from "../../hooks/useFormErrors/types";
import { validate } from "../../hooks/useFormErrors/utils";
import validators from "../../hooks/useFormErrors/validators";
import {
  FGConfig,
  InputConfig,
  InputTypes,
  ObjectConfig,
  SelectConfig,
} from "./types";

export const recursivelyMapValidators = (
  config: FGConfig[],
  basePath: string
): ErrorValidatorMap => {
  return config.reduce((accum: ErrorValidatorMap, inputOrForm: FGConfig) => {
    const path = getPath(basePath, inputOrForm);

    if (isObjectInput(inputOrForm)) {
      return {
        ...accum,
        ...recursivelyMapValidators(inputOrForm.config, path),
      };
    } else {
      if (inputOrForm.isValid) {
        const validatorStrings = inputOrForm.isValid.split(",");

        const funcs = validatorStrings.map((str: string) => {
          const [funcName, paramsStr] = str.split(":");
          if (!paramsStr)
            return validators[funcName as keyof typeof validators] as unknown as ValidatorFn;
          else {
            const params = paramsStr.split("|");
            // @ts-ignore
            return validators[funcName as keyof typeof validators](...params) as unknown as ValidatorFn;
          }
        });

        accum[path] = validate(...funcs);
      }
    }
    return accum;
  }, {} as ErrorValidatorMap);
};

export const getPath = (basePath: string, config: FGConfig) => {
  return basePath ? basePath + "." + config.path : config.path;
};

export const isStringInput = (config: FGConfig): config is InputConfig => {
  return config.type === InputTypes.STRING;
};

export const isSelectInput = (config: FGConfig): config is SelectConfig => {
  return config.type === InputTypes.SELECT;
};

export const isObjectInput = (config: FGConfig): config is ObjectConfig => {
  return config.type === InputTypes.OBJECT;
};

// export const isArrayInput = (config: FGConfig): config is ArrayConfig => {
//   return config.type === InputTypes.ARRAY;
// };
