import { FormEvent, useEffect, useState } from 'react'
import { useModalActions, useModalStore } from '@/store/modal'
import { signupProps, signupValidationProps } from '@/types'

interface useSignupFormProps {
  initialValues: signupProps
  validate: signupValidationProps
}

const useSignupForm = ({ initialValues, validate }: useSignupFormProps) => {
  const [values, setValues] = useState<signupProps>(initialValues)
  const [errorMsg, setErrorMsg] = useState('')
  const isOpen = useModalStore()
  const { openModal } = useModalActions()
  const handleInputChange = (name: string, value: string) => {
    // console.log(name, value)
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  /**
   * 
   * 
   *     const email = '0321minji@naver.com'
    const password = '12341234'
   */
  useEffect(() => {
    if (!isOpen) {
      setErrorMsg('')
    }
  }, [isOpen])
  const submitSignupForm = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    const error = validate(values)
    console.log(error)
    if (error) {
      setErrorMsg(error)
      return openModal()
    } else {
      console.log(values)
    }

    /* if (!inputRefs.current[0].value) {
      setErrorMsg('이메일 주소를 입력하시오')
      return openModal()
    } else {
      if (!email_format.test(inputRefs.current[0].value)) {
        setErrorMsg('올바른 형식의 이메일을 입력해 주세요')
        return openModal()
      }
    }*/
    /*
    if (!inputRefs.current[1].value) {
      setErrorMsg('비밀번호를 입력하시오')
      return openModal()
    }
    if (!inputRefs.current[2].value) {
      setErrorMsg('이름을 입력하시오')
      return openModal()
    }
    if (!inputRefs.current[3].value) {
      setErrorMsg('디스코드 아이디를 입력하시오')
      return openModal()
    }*/
    /*
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
        setErrorMsg({ email: '', password: '등록되지 않은 계정 입니다' })
        return openModal()
      } else {
        router.replace('/home')
      }
    } catch (e) {
      console.log(e)
      alert('로그인 오류')
      setErrorMsg('관리자 문의 부탁 드립니다')
      return openModal()
      //const errorMsg = e.error || e.response.data
      //const errorStatus = e.status
      //console.log('Error', errorMsg, errorStatus)
    }*/
  }

  return { values, errorMsg, handleInputChange, submitSignupForm }
}

export default useSignupForm
