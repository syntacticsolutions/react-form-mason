import { useCallback } from "react";
import {
  FGConfig,
  InputTypes,
  InputConfig,
  SelectConfig,
  ObjectConfig,
  ArrayConfig,
} from "../types";

export const usePropGetter = (
  state: Record<string, any>,
  { setInput, setSelect }: any
) => {
  const getComponentSpecificProps = useCallback(
    (config: FGConfig): Record<string, any> => {
      if (isStringInput(config)) {
        return {
          onChange: setInput(config.path),
          value: state[config.path],
          ...config,
        };
      }
      else if (isSelectInput(config)) {
        return {
          onChange: setSelect(config.path),
          value: state[config.path],
          ...config,
        };
      }
      else if (isObjectInput(config)) {
        return {
          config: config.config,
        };
      }
      else if (isArrayInput(config)) {
        return {
          config: config.config,
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
