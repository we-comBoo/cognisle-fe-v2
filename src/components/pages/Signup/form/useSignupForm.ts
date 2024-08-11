import { FormEvent, useEffect, useState } from 'react'
import { useModalActions, useModalStore } from '@/store/modal'
import {
  StateModalContentProps,
  signupProps,
  signupValidationProps,
} from '@/types'

import axios from 'axios'

interface useSignupFormProps {
  initialValues: signupProps
  validate: signupValidationProps
}

const useSignupForm = ({ initialValues, validate }: useSignupFormProps) => {
  const [values, setValues] = useState<signupProps>(initialValues)
  const [modalContent, setModalContent] = useState<StateModalContentProps>({
    type: 'warning',
    content: '',
  })
  const isOpen = useModalStore()
  const { openModal } = useModalActions()
  const handleInputChange = (name: string, value: string) => {
    // console.log(name, value)
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (!isOpen) {
      setModalContent({ type: 'warning', content: '' })
    }
  }, [isOpen])
  const submitSignupForm = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    const error = validate(values)
    console.error(error)
    if (error) {
      setModalContent({ type: 'warning', content: error })
      return openModal()
    } else {
      console.info(values)
      try {
        const response = await axios.post('/api/user/signup', values)

        setModalContent({
          type: 'success',
          content: '회원가입 성공했습니다!',
        })
      } catch (error) {
        console.log('가입 중 에러 발생', error)
        setModalContent({
          type: 'warning',
          content: '가입 과정에서 오류 발생! 관리자 문의 요청 드립니다!',
        })
      } finally {
        openModal()
      }
    }
  }

  return { values, modalContent, handleInputChange, submitSignupForm }
}

export default useSignupForm
