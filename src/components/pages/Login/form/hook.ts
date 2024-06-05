import { FormEvent, useRef, useState } from 'react'
import { signIn } from 'next-auth/react'
import useRouter from 'next/router'
import { useModalActions } from '@/store/modal'
const useLoginForm = () => {
  const router = useRouter
  const inputRefs = useRef<HTMLInputElement[]>([]) // [이메일, 비밀번호]
  const [errorMsg, setErrorMsg] = useState({
    email: '',
    password: '',
  })
  const { openModal } = useModalActions()

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
      setErrorMsg({ email: '이메일 주소를 입력하시오', password: '' })
      return openModal()
    }
    if (!inputRefs.current[1].value) {
      setErrorMsg({ email: '', password: '비밀번호를 입력하시오' })
      return openModal()
    }
    try {
      const res = await signIn<'credentials'>('credentials', {
        email: inputRefs.current[0].value,
        password: inputRefs.current[1].value,
        redirect: false,
      })
      if (res && res.status != 200) {
        //const errorMsg = res.error || res.response.data
        const errorMsg = res.error || '로그인 재시도 요청'
        const errorStatus = res.status
        console.log('Error', errorMsg, errorStatus)
        setErrorMsg({ email: '', password: errorMsg })
      } else {
        router.replace('/home')
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
