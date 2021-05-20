import { useEffect, useRef } from "react";

export default function useOnClickOutside<T extends HTMLElement>(
  handler: (event: MouseEvent | TouchEvent) => void,
  ...extraRefs: React.RefObject<T>[]
): React.RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref or extraRef element or descendent elements of these
      if (
        !ref.current ||
        [ref, ...extraRefs].some((ref) =>
          ref.current?.contains(event.target as Node)
        )
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("mouseup", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("touchend", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("mouseup", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("touchend", listener);
    };
  }, [ref, handler, extraRefs]);

  return ref;
}
