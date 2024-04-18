import { useEffect, useRef, useState } from "react";
import { Option } from "../../../models/common";

export const useAccessibleDropdown = (
  list: Option[],
  onSelected: (item: Option) => void
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRefs = useRef(new Array(list.length));

  // Focus the current item when currentIndex changes
  useEffect(() => {
    if (itemRefs.current[currentIndex]) {
      itemRefs.current[currentIndex].focus();
    }
  }, [currentIndex]);

  // Handle key down events
  const handleKeyDown = (event: any, index: number, item: Option) => {
    if (event.key === "ArrowDown") {
      event.preventDefault(); // Prevent page scrolling
      const nextIndex = index + 1 < list.length ? index + 1 : 0;
      setCurrentIndex(nextIndex);
    } else if (event.key === "ArrowUp") {
      event.preventDefault(); // Prevent page scrolling
      const prevIndex = index - 1 >= 0 ? index - 1 : list.length - 1;
      setCurrentIndex(prevIndex);
    } else if (event.key === "Enter") {
      setCurrentIndex(-1);
      onSelected(item);
    }
  };

  return { handleKeyDown, itemRefs };
};
