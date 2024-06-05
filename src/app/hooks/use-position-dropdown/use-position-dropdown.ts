import { useLayoutEffect, useRef } from 'react';

export const usePositionDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const dropdownContent = dropdownRef.current as HTMLElement;
    const dropdownOffset = dropdownContent.getBoundingClientRect();
    const dropdownWidth = dropdownContent.clientWidth;
    const windowWidth = window.innerWidth;
    const marginRight = 32;
    const sumWidth = dropdownOffset.left + dropdownWidth + marginRight;
    const isElementBeyondScreen = sumWidth > windowWidth;

    if (isElementBeyondScreen) {
      dropdownContent.style.left = `-${sumWidth - windowWidth}px`;
    }
  }, []);

  return dropdownRef;
};
