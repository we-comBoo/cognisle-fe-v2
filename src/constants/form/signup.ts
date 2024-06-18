export interface signupProps {
  [index: string]: string | number
  email: string
  password: string
  name: string
  dsId: string
  dsName: string
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
