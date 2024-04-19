import { useMemo, useState } from "react";
import { ObservableInput, forkJoin } from "rxjs";
import _ from "lodash";
import { useSubscription } from "observable-hooks";
import { removeEmpty, runValidatorsOn } from "./utils";
import { ErrorValidatorMap, ValidatorFuncParams } from "./types";

export const useFormErrors = (
  formData: Record<string, any>,
  errorValidatorMap: ErrorValidatorMap
) => {
  const [errors, setErrors] = useState({});

  const errors$ = useMemo(() => {
    const validators = runValidatorsOn(errorValidatorMap, formData);
    return forkJoin<Record<string, ObservableInput<ValidatorFuncParams>>>(
      validators
    );
  }, [formData]);

  useSubscription<Record<string, ValidatorFuncParams>>(
    errors$,
    (errs: Record<string, ValidatorFuncParams>) => {
      setErrors(removeEmpty(errs));
    }
  );

  return { errors };
};
