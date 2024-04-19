import React, { useMemo } from "react";
import { useFormData } from "../../hooks/useFormData";
import { FormGeneratorProps, InputTypes } from "./types";
import { usePropGetter } from "./hooks/usePropGetter";
import _ from "lodash";
import { FGInput } from "../Input/Input";
import { Select } from "../Select/Select";
import { useFormErrors } from "../../hooks";
import { recursivelyMapValidators } from "./utils";

export const FormGenerator = ({
  config,
  inputTypeMap,
  onUpdated = (data: Record<string, any>) => {},
  formState,
  basePath = ""
}: FormGeneratorProps<any>) => {
  const { ...setters } = useFormData(formState, onUpdated);

  const errorValidatorMap = useMemo(() => recursivelyMapValidators(config, basePath), []);

  const errors = useFormErrors(formState, errorValidatorMap);

  const getComponentSpecificProps = usePropGetter(
    formState,
    setters,
    basePath,
    inputTypeMap || inputMap,
    onUpdated,
    errors
  );

  return (
    <div>
      {config.map((config, key) => (
        <InputWrapper
          formState={formState}
          config={config}
          inputTypeMap={inputTypeMap || inputMap}
          getComponentSpecificProps={getComponentSpecificProps}
          errors={errors}
          key={key}
        />
      ))}
    </div>
  );
};

export const inputMap = {
  [InputTypes.STRING]: FGInput,
  [InputTypes.SELECT]: Select,
  [InputTypes.OBJECT]: FormGenerator,
  // [InputTypes.ARRAY]: Arry,
};

const InputWrapper = ({
  config,
  inputTypeMap,
  getComponentSpecificProps,
  errors,
  formState,
}: any) => {
  const Component = inputTypeMap[config.type];
  const props = getComponentSpecificProps(config);
  const error = _.get(errors, config.path);

  return (
    <div>
      <Component {...props} error={error} />
    </div>
  );
};
