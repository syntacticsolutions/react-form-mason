import { DetailedHTMLProps, InputHTMLAttributes, useCallback } from "react";
import {
  FGConfig,
  FormGeneratorProps,
} from "../types";
import { SelectProps } from "../../Select/types";
import _ from 'lodash';
import { getPath, isObjectInput, isSelectInput, isStringInput } from "../utils";

export const usePropGetter = (
  state: Record<string, any>,
  { setInput, setSelect }: any,
  currentPath: string,
  inputTypeMap: any,
  onUpdated: any,
  errors: any
) => {
  const getComponentSpecificProps = useCallback(
    (config: FGConfig) => {
      const path = getPath(currentPath, config)
      if (isStringInput(config)) {
        const props: DetailedHTMLProps<
          InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
        > = {
          onChange: setInput(path),
          value: _.get(state, path),
          ...config,
        };
        return props;
      } else if (isSelectInput(config)) {
        const props: SelectProps = {
          onChange: setSelect(path),
          value: _.get(state, path),
          ...config,
        };
        return props;
      } else if (isObjectInput(config)) {
        const props: FormGeneratorProps<any> = {
          config: config.config,
          basePath: path,
          formState: state,
          inputTypeMap,
          onUpdated,
          errors,
        };
        return props;
      }
      // else if (isArrayInput(config)) {
      //   return {
      //     config: config.config,
      //     path: currentPath,
      //   };
      // }
      return {};
    },
    [state, setSelect, setInput]
  );

  return getComponentSpecificProps;
};
