import { signupProps, signupValidationProps } from '@/types'

export const SIGNUP_VALIDATION: signupValidationProps = ({
  name,
  email,
  password,
  dsId,
  dsName,
}) => {
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

  if (!name) {
    return '이름이 입력되지 않았습니다.'
  }

  return ''
}

export const SIGNUP_INITIAL_VALUES: signupProps = {
  email: '',
  password: '',
  name: '',
  dsId: '',
  dsName: '',
}

export const SIGNUP_FORM = [
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
  {
    label: '이름',
    id: 'name',
    type: 'text',
    placeholder: '이름',
    name: 'name',
  },
  {
    label: '디스코드 아이디',
    id: 'dsName',
    type: 'text',
    placeholder: '디스코드 아이디',
    name: 'dsName',
  },
]
