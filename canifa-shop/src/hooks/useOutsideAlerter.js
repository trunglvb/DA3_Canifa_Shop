/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref, handleFunction, variable, parentRef) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (parentRef.current && !parentRef.current.contains(event.target)) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleFunction(variable);
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
