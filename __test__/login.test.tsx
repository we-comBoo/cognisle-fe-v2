import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'
import Login from '@/pages/login' // 예시에서는 LoginModal 컴포넌트를 가정합니다.

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))
describe('로그인 테스트', () => {
  // 모달을 위한 modal-root의 컨테이너 생성
  let modalRoot = document.getElementById('modal-root')

  let emailInput: HTMLElement,
    passwordInput: HTMLElement,
    loginButton: HTMLElement
  const event = userEvent.setup()
  beforeEach(() => {
    // 모든 테스트 전에 modal-root 요소를 생성하고 body에 추가합니다.
    if (!modalRoot) {
      modalRoot = document.createElement('div')
      modalRoot.setAttribute('id', 'modal-root')
      document.body.appendChild(modalRoot)
    }
    // useRouter를 목(mock) 함수로 설정합니다.
    ;(useRouter as jest.Mock).mockReturnValue({ isReady: true })
    render(
      <>
        <Login />
      </>,
    )
    // 이메일과 비밀번호 입력 컴포넌트
    emailInput = screen.getByPlaceholderText('이메일')
    passwordInput = screen.getByPlaceholderText('비밀번호')
    loginButton = screen.getByRole('button', { name: /로그인/i })
  })

  afterEach(() => {
    // 각 테스트 종료 후 modal-root 요소를 body에서 제거합니다.
    if (modalRoot) {
      document.body.removeChild(modalRoot)
      modalRoot = null
    }
  })

  test('이메일 입력 안함 & 비밀번호 입력 안함 | 이메일 입력 요청 모달', async () => {
    await userEvent.click(loginButton)

    // 경고 모달이 나타나는지 확인
    await waitFor(() => {
      const modalElement = document.getElementById('modal-root')
      expect(modalElement).toHaveTextContent('이메일이 입력되지 않았습니다.')
    })
  })
  test('이메일 입력 안함 & 유효한 비밀번호 입력함 | 이메일 입력 요청 모달', async () => {
    await event.type(passwordInput, 'testDEV1234!')

    expect(passwordInput).toHaveValue('testDEV1234!')
    await userEvent.click(loginButton)

    // 경고 모달이 나타나는지 확인
    await waitFor(() => {
      const modalElement = document.getElementById('modal-root')
      expect(modalElement).toHaveTextContent('이메일이 입력되지 않았습니다.')
    })
  })
  test('유효한 이메일 입력 안 함 & 비밀번호 입력 안함 | 유효한 이메일 입력 요청 모달', async () => {
    await event.type(emailInput, 'test')

    expect(emailInput).toHaveValue('test')

    await userEvent.click(loginButton)

    // 경고 모달이 나타나는지 확인
    await waitFor(() => {
      const modalElement = document.getElementById('modal-root')
      expect(modalElement).toHaveTextContent(
        '입력된 이메일이 유효하지 않습니다.',
      )
    })
  })
  test('유효한 이메일 입력 안 함 & 유효한 비밀번호 입력함  | 유효한 이메일 입력 요청 모달', async () => {
    await event.type(emailInput, 'test')
    await event.type(passwordInput, 'testDEV1234!')

    expect(emailInput).toHaveValue('test')
    expect(passwordInput).toHaveValue('testDEV1234!')
    await userEvent.click(loginButton)

    // 경고 모달이 나타나는지 확인
    await waitFor(() => {
      const modalElement = document.getElementById('modal-root')
      expect(modalElement).toHaveTextContent(
        '입력된 이메일이 유효하지 않습니다.',
      )
    })
  })
  test('유효한 이메일 입력 함 & 비밀번호 입력 안함 | 비밀번호 입력 요청 모달', async () => {
    await event.type(emailInput, 'test@gmail.com')

    expect(emailInput).toHaveValue('test@gmail.com')

    await userEvent.click(loginButton)

    // 경고 모달이 나타나는지 확인
    await waitFor(() => {
      const modalElement = document.getElementById('modal-root')
      expect(modalElement).toHaveTextContent('비밀번호가 입력되지 않았습니다.')
    })
  })
  test('유효한 이메일 입력 함 & 유효한 비밀번호 입력 안함 | 유효한 비밀번호 입력 요청 모달', async () => {
    await event.type(emailInput, 'test@gmail.com')
    await event.type(passwordInput, 'password123')

    expect(emailInput).toHaveValue('test@gmail.com')
    expect(passwordInput).toHaveValue('password123')
    await userEvent.click(loginButton)

    // 경고 모달이 나타나는지 확인
    await waitFor(() => {
      const modalElement = document.getElementById('modal-root')
      expect(modalElement).toHaveTextContent(
        '8~16자의 영문, 숫자, 특수문자 사용해 주세요.',
      )
    })
  })
  test('유효한 이메일 입력 함 & 유효한 비밀번호 입력 & 틀린 비밀번호 로그인 | 틀린 계정 안내 모달', async () => {
    await event.type(emailInput, 'test@gmail.com')
    await event.type(passwordInput, 'testDEV123!')

    expect(emailInput).toHaveValue('test@gmail.com')
    expect(passwordInput).toHaveValue('testDEV123!')
    await userEvent.click(loginButton)
    // 경고 모달이 나타나는지 확인

    await waitFor(() => {
      const modalElement = document.getElementById('modal-root')
      expect(modalElement).toHaveTextContent(
        '이메일이나 비밀번호가 올바르지 않습니다.',
      )
    })
  })
  /*
  test('유효한 이메일 입력 함 & 유효한 비밀번호 입력 & 틀린 이메일 로그인 | 틀린 계정 안내 모달', async () => {
    await event.type(emailInput, 'test1@gmail.com')
    await event.type(passwordInput, 'testDEV123!')

    expect(emailInput).toHaveValue('test1@gmail.com')
    expect(passwordInput).toHaveValue('testDEV123!')
    await userEvent.click(loginButton)
    // 경고 모달이 나타나는지 확인
    await waitFor(() => {
      const modalElement = document.getElementById('modal-root')
      expect(modalElement).toHaveTextContent('존재하지 않는 계정입니다.')
    })
  })*/
  test('유효한 이메일 입력 함 & 유효한 비밀번호 입력 & 올바른 계정 로그인 | Home 이동', async () => {
    await event.type(emailInput, 'test@gmail.com')
    await event.type(passwordInput, 'testDEV1234!')

    expect(emailInput).toHaveValue('test@gmail.com')
    expect(passwordInput).toHaveValue('testDEV1234!')
    await userEvent.click(loginButton)

    // HOME으로 이동하는지 확인
    /*await waitFor(() => {
      const modalElement = document.getElementById('modal-root')
      expect(modalElement).toHaveTextContent('등록되지 않은 계정 입니다')
    })*/
  })
})
