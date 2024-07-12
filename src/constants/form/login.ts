import { loginProps, loginValidationProps } from '@/types'
import LOCAL_STORAGE_KEY from '../localStorageKey'

export const LOGIN_VALIDATION: loginValidationProps = ({ email, password }) => {
  if (!email) {
    return '이메일이 입력되지 않았습니다.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return '입력된 이메일이 유효하지 않습니다.'
  }

  if (!password) {
    return '비밀번호가 입력되지 않았습니다.'
  } else if (
    !/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/i.test(password)
  ) {
    return '8~16자의 영문, 숫자, 특수문자 사용해 주세요.'
  }

  return ''
}
export const LS_EMAIL =
  typeof window !== 'undefined'
    ? localStorage.getItem(LOCAL_STORAGE_KEY.EMAIL_CHECK_BOX) ?? ''
    : ''

export const LOGIN_INITIAL_VALUES: loginProps = {
  email: '',
  password: '',
}

export const LOGIN_FORM = [
  {
    label: '이메일',
    id: 'email',
    type: 'text',
    placeholder: '이메일',
    name: 'email',
  },
  {
    label: '비밀번호',
    id: 'password',
    type: 'password',
    placeholder: '비밀번호',
    name: 'password',
  },
]
