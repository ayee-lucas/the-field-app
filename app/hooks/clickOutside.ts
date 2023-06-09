import { useEffect, useRef } from 'react';

/* interface Props {
  hadnler: () => void
} */

export const useClickOutside = (handler: () => void) => {
  function handling() {
    handler();
  }

  const domNode = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as Node)) {
        handling();
      }
    };
    document.addEventListener('mousedown', maybeHandler);
    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });
  return domNode;
};
