import React from "react";
import { useFormData } from "../../hooks/useFormData";
import { FormGeneratorProps } from "./types";
import { usePropGetter } from "./hooks/usePropGetter";
import { inputMap } from "./constants";
import _ from "lodash";

export const FormGenerator = ({
  config,
  inputTypeMap,
  onUpdated = (data: Record<string, any>) => {},
  errors = {},
  formState,
  runningPath = "",
}: FormGeneratorProps<any>) => {
  const { ...setters } = useFormData(formState, onUpdated);

  const getComponentSpecificProps = usePropGetter(
    formState,
    setters,
    runningPath,
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
