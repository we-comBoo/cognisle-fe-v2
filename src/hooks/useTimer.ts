import { useEffect } from 'react'
const useTimer = (time: number, handler: () => void) => {
  useEffect(() => {
    // console.log('start time')
    const timer = setTimeout(() => {
      handler()
    }, time)
    return () => clearTimeout(timer)
  }, [time, handler]) // Reload only if ref or handler changes
}

export default useTimer
