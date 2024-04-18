import _ from "lodash";
import { from } from "rxjs";
import { ErrorValidatorMap, ValidatorFn, ValidatorFuncParams } from "./types";

export const runValidatorsOn = (
  errorValidatorMap: ErrorValidatorMap,
  formData: Record<string, any>
) => {
  return _.reduce(
    errorValidatorMap,
    (accum, validator, key) => {
      accum[key] = from(
        Promise.resolve(
          validator({ formData, value: _.get(formData, key, "") })
        )
      );
      return accum;
    },
    {} as any
  );
};

export const removeEmpty = (errs: ValidatorFuncParams) => {
  return _.reduce(
    errs,
    (accum, iter, key) => {
      if (iter.error) {
        accum[key] = iter.error;
      }
      return accum;
    },
    {} as any
  );
};

export const validate = (...funcs: ValidatorFn[]) => {
  return async (initialValue: ValidatorFuncParams) => {
    return funcs.reduce(async (previousValuePromise, func) => {
      const previousValue = await previousValuePromise;

      // If there's an error already, pass through the chain unchanged
      if (previousValue.error) {
        return previousValue;
      }

      // Execute the current validation function
      const error = await func(previousValue);

      // If the validator returns an object, use it, otherwise pass previousValue
      return error ? { error } : previousValue;
    }, Promise.resolve(initialValue));
  };
};
