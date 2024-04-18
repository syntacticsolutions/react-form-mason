import { useEffect, useRef } from "react";

export const useClickAwayHandler = (visible: boolean, onClosed: () => void) => {
  const dropdownRef = useRef(document.createElement("ul"));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target &&
        dropdownRef.current &&
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        onClosed();
        document.removeEventListener("click", handleClickOutside);
      }
    };

    if (visible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [visible]);

  return { dropdownRef };
};
