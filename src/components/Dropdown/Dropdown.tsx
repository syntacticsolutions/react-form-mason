import React from "react";
import { DropdownProps } from "./types";
import { useAccessibleDropdown } from "./hooks/useAccessibleDropdown";
import { useClickAwayHandler } from "../../hooks/useClickAwayHandler";
import { Option } from "../../models/common";

export function Dropdown({
  list = [],
  visible = false,
  style = { top: "-20px" },
  onSelected,
  onClosed,
}: DropdownProps) {
  const { handleKeyDown, itemRefs } = useAccessibleDropdown(list, onSelected);

  const { elementRef } = useClickAwayHandler(visible, onClosed);

  const handleSelectItem = (item: Option) => () => {
    onSelected(item);
  };

  return (
    <div className="formgen-dropdown-container">
      <ul className={visible ? "visible" : ""} style={style} ref={elementRef}>
        {list.map((item, index) => (
          <div
            key={index}
            role="button"
            onClick={handleSelectItem(item)}
            tabIndex={0}
            ref={(el) => (itemRefs.current[index] = el)}
            onKeyDown={(event) => handleKeyDown(event, index, item)}
          >
            <li>{item.label}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
