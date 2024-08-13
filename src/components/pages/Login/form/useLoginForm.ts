import { FormEvent, useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { loginProps, loginValidationProps } from '@/types/form'
import { useModalActions, useModalStore } from '@/store/modal'
import { useRouter } from 'next/router'
import { LS_EMAIL } from '@/constants/form'
import { LOCAL_STORAGE_KEY } from '@/constants/localStorage'

interface useLoginFormProps {
  initialValues: loginProps
  validate: loginValidationProps
}
const useLoginForm = ({ initialValues, validate }: useLoginFormProps) => {
  const router = useRouter()

  const [values, setValues] = useState<loginProps>(initialValues)
  const [emailFlagCheck, setEmailFlagCheck] = useState(Boolean(values.email))
  const [errorMsg, setErrorMsg] = useState('')
  const isOpen = useModalStore()
  const { openModal } = useModalActions()
  const handleInputChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }
  const handleEmailFlagCheck = () => {
    setEmailFlagCheck((prev) => !prev)
  }
  const handleLocalStorageEmail = () => {
    if (emailFlagCheck) {
      localStorage.setItem(LOCAL_STORAGE_KEY.EMAIL_CHECK_BOX, values.email)
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY.EMAIL_CHECK_BOX)
    }
  }
  useEffect(() => {
    if (!isOpen) {
      setErrorMsg('')
    }
  }, [isOpen])

  useEffect(() => {
    console.log('emailFlagCheck', emailFlagCheck)
    handleLocalStorageEmail()
  }, [emailFlagCheck])

  useEffect(() => {
    if (LS_EMAIL) {
      setValues((prev) => ({ ...prev, email: LS_EMAIL }))
      setEmailFlagCheck(true)
    }
  }, [LS_EMAIL])

  const submitLoginForm = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(values)
    const error = validate(values)
    if (error) {
      setErrorMsg(error)
      return openModal()
    } else {
      try {
        handleLocalStorageEmail()
        const res = await signIn<'credentials'>('credentials', {
          email: values.email,
          password: values.password,
          redirect: false,
        })
        /// console.log(res, res?.status)
        if (res?.status != 200) {
          // 400 { datail: '아이디나 비밀번호가 올바르지 않습니다.' }
          //  404 { detail: 'Not found.' }

          throw new Error(res?.error ?? '관리자 문의 부탁 드립니다')
        } else {
          const {
            query: { callbackUrl },
          } = router
          console.log(callbackUrl)
          const url = typeof callbackUrl == 'string' ? callbackUrl : '/home'
          console.log(
            '라우터 이동!!',
            callbackUrl,
            router,
            typeof callbackUrl == 'string',
          )
          return router.push(url)
        }
      } catch (e) {
        console.log(e)
        alert('로그인 오류')
        if (e instanceof Error) {
          setErrorMsg(e.message)
        }
        return openModal()
      }
    }
  }

  return {
    values,
    emailFlagCheck,
    errorMsg,
    handleEmailFlagCheck,
    handleInputChange,
    submitLoginForm,
  }
}

export default useLoginForm
