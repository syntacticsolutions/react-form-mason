import { Option } from "../../models/common";

export interface SelectProps {
  onChange: (value: Option) => void;
  options: Option[];
  value: Option;
  placeholder?: string;
}
