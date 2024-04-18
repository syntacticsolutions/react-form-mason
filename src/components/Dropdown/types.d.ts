import { Option } from "../../models/common";

export interface DropdownProps {
  list: Option[];
  visible: boolean;
  style?: React.CSSProperties;
  onSelected: (item: Option) => void;
  onClosed: () => void;
} // Assuming Icon is now a React component
