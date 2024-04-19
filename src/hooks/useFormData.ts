import React, { ChangeEvent, useCallback } from "react";
import { Option } from "../models/common";
import _ from "lodash";

export function useFormData<T = Record<string, any>>(
  data: T,
  onChange: (data: T) => void
) {
  const setInput = useCallback(
    (path: string) => (ev: ChangeEvent<HTMLInputElement>) => {
      const newData = _.cloneDeep(data);
      _.set(newData as any, path, ev.target.value);
      onChange(newData);
    },
    [data]
  );

  const setSelect = useCallback(
    (path: string) => (opt: Option) => {
      const newData = _.cloneDeep(data);
      _.set(newData as any, path, opt);
      onChange(newData);
    },
    [data]
  );

  return { setInput, setSelect };
}
