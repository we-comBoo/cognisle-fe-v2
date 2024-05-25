import { useRef, useState } from 'react'
import { signIn } from 'next-auth/react'
const useLoginForm = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]) // [이메일, 비밀번호]
  const [errorMsg, setErrorMsg] = useState({
    email: '',
    password: '',
  })

  /**
   * 
   * 
   *     const email = '0321minji@naver.com'
    const password = '12341234'
   */

  const submitLoginForm = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(inputRefs.current[0].value, inputRefs.current[1].value)
    if (!inputRefs.current[0].value) {
      return setErrorMsg({ email: '이메일 주소를 입력하시오', password: '' })
    }
    if (!inputRefs.current[1].value) {
      return setErrorMsg({ email: '', password: '비밀번호를 입력하시오' })
    }
    try {
      const res = await signIn('credentials', {
        email: inputRefs.current[0].value,
        password: inputRefs.current[1].value,
        redirect: false,
      })
      if (res.status != 200) {
        const errorMsg = res.error || res.response.data
        const errorStatus = res.status
        console.log('Error', errorMsg, errorStatus)
        setErrorMsg({ email: '', password: errorMsg })
      }
    } catch (e) {
      console.log(e)
      alert('로그인 오류')
      //const errorMsg = e.error || e.response.data
      //const errorStatus = e.status
      //console.log('Error', errorMsg, errorStatus)
    }
  }

  return { inputRefs, errorMsg, submitLoginForm }
}

export default useLoginForm
