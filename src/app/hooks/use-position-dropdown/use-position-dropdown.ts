import { useLayoutEffect, useRef } from 'react';

export const usePositionDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const dropdownContent = dropdownRef.current as HTMLElement;
    const dropdownOffset = dropdownContent.getBoundingClientRect();
    const dropdownWidth = dropdownContent.clientWidth;
    const windowWidth = window.innerWidth;
    const marginRight = 32;

    if (dropdownOffset.left + dropdownWidth > windowWidth) {
      dropdownContent.style.left = `-${dropdownOffset.left + dropdownWidth + marginRight - windowWidth}px`;
    }
  }, []);

  return dropdownRef;
};
