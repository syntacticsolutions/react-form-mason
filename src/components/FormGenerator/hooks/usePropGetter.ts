import { DetailedHTMLProps, InputHTMLAttributes, useCallback } from "react";
import {
  FGConfig,
  InputTypes,
  InputConfig,
  SelectConfig,
  ObjectConfig,
  ArrayConfig,
  FormGeneratorProps,
} from "../types";
import { SelectProps } from "../../Select/types";
import _ from 'lodash';

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
      const path = currentPath ? currentPath + '.' + config.path : config.path
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
          runningPath: currentPath + path,
          formState: state,
          inputTypeMap,
          onUpdated,
          errors,
        };
        console.log(props)
        return props;
      } else if (isArrayInput(config)) {
        return {
          config: config.config,
          path: currentPath,
        };
      }
      return {};
    },
    [state, setSelect, setInput]
  );

  return getComponentSpecificProps;
};

const isStringInput = (config: FGConfig): config is InputConfig => {
  return config.type === InputTypes.STRING;
};

const isSelectInput = (config: FGConfig): config is SelectConfig => {
  return config.type === InputTypes.SELECT;
};

const isObjectInput = (config: FGConfig): config is ObjectConfig => {
  return config.type === InputTypes.OBJECT;
};

const isArrayInput = (config: FGConfig): config is ArrayConfig => {
  return config.type === InputTypes.ARRAY;
};
