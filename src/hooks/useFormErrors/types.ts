export type ValidatorPipe = (
  ...funcs: ValidatorFn[]
) => ValidatorFn;

export type ErrorValidatorMap = Record<string, ValidatorFn>;

export type ValidatorFuncParams = {
    formData?: Record<string, any>;
    value?: any;
    error?: string;
}

export type ValidatorFn = ({formData, value, error}: ValidatorFuncParams) => Promise<ValidatorFuncParams>