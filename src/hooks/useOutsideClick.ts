import { RefObject, useEffect } from 'react'
const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | null,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      console.log('      ㅍㅎ퍼ㅗ', ref?.current)
      // console.log('ㅗ퍼ㅗ', event.target)
      if (ref && !ref.current) {
        return
      } else if (
        ref &&
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        handler(event)
      }
    }

    document.addEventListener('click', listener)
    // document.addEventListener("mousedown", listener);
    // document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener('click', listener)
      // document.removeEventListener("mousedown", listener);
      // document.removeEventListener("touchstart", listener);
    }
  }, [ref, handler]) // Reload only if ref or handler changes
}

export default useOutsideClick
