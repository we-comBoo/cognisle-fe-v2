import { useRef, useState } from 'react'
const useLoginForm = () => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const [errorMsg, setErrorMsg] = useState({
    email: '',
    password: '',
  })

  const submitLoginForm = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(inputRefs.current[0].value, inputRefs.current[1].value)
  }

  return { inputRefs, errorMsg, submitLoginForm }
}

export default useLoginForm
