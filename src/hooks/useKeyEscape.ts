import { useEffect } from 'react'

const useKeyEscape = <T extends HTMLElement = HTMLElement>(
  key: string,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key.toLowerCase().includes(key)) {
        console.log('ESC 누름')
        handler(event)
      }
    }
    globalThis.addEventListener('keyup', listener)
    return () => {
      globalThis.removeEventListener('keyup', listener)
    }
  }, [key, handler])
} // Reload only if ref or handler changes

export default useKeyEscape
