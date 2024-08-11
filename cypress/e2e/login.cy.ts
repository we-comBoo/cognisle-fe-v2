import { MENU_INFO } from '../../src/constants/menu/home'

describe('Login Modal Test', () => {
  beforeEach(() => {
    // 테스트할 페이지를 방문합니다.
    cy.visit('/login')
  })

  it('로그인 페이지로 이동', () => {
    // Find a link with an href attribute containing "about" and click it
    cy.contains('LOGIN').should('exist')
  })
  it('사용자 입력값 Input에 입력 여부 확인', () => {
    // 인풋 요소를 찾고 텍스트를 입력합니다.
    cy.get('input[name="email"]')
      .type('test@gmail.com')
      .should('have.value', 'test@gmail.com')

    cy.get('input[name="password"]')
      .type('testDEV123!')
      .should('have.value', 'testDEV123!')
  })

  // 프론트 단 사전 오류 처리 확인
  it('유효한 이메일 입력 함 & 유효한 비밀번호 입력 안함 | 유효한 비밀번호 입력 요청 모달', () => {
    // 폼의 인풋 요소를 찾아 값을 입력합니다.
    cy.get('input[name="email"]')
      .type('test@gmail.com')
      .should('have.value', 'test@gmail.com')

    cy.get('input[name="password"]')
      .type('password123')
      .should('have.value', 'password123')

    // 폼을 제출합니다.
    cy.get('form').submit()

    // 모달이 나타날 때까지 기다립니다.
    cy.get('#modal-root') // 모달의 클래스 또는 선택자를 사용합니다.
      .should('contain.text', '8~16자의 영문, 숫자, 특수문자 사용해 주세요.') // 모달에 표시된 메시지가 예상한 것인지 확인합니다.
  })
  it('유효한 이메일 입력 함 & 비밀번호 입력 안함 | 비밀번호 입력 요청 모달', () => {
    // 폼의 인풋 요소를 찾아 값을 입력합니다.
    cy.get('input[name="email"]')
      .type('test@gmail.com')
      .should('have.value', 'test@gmail.com')

    // 폼을 제출합니다.
    cy.get('form').submit()

    // 모달이 나타날 때까지 기다립니다.
    cy.get('#modal-root') // 모달의 클래스 또는 선택자를 사용합니다.
      .should('contain.text', '비밀번호가 입력되지 않았습니다.') // 모달에 표시된 메시지가 예상한 것인지 확인합니다.
  })
  it('유효한 이메일 입력 안 함 & 유효한 비밀번호 입력함  | 유효한 이메일 입력 요청 모달', () => {
    // 폼의 인풋 요소를 찾아 값을 입력합니다.
    cy.get('input[name="email"]').type('test').should('have.value', 'test')
    cy.get('input[name="password"]')
      .type('testDEV1234!')
      .should('have.value', 'testDEV1234!')

    // 폼을 제출합니다.
    cy.get('form').submit()

    // 모달이 나타날 때까지 기다립니다.
    cy.get('#modal-root') // 모달의 클래스 또는 선택자를 사용합니다.
      .should('contain.text', '입력된 이메일이 유효하지 않습니다.') // 모달에 표시된 메시지가 예상한 것인지 확인합니다.
  })
  it('유효한 이메일 입력 안 함 & 비밀번호 입력 안함 | 유효한 이메일 입력 요청 모달', () => {
    // 폼의 인풋 요소를 찾아 값을 입력합니다.
    cy.get('input[name="email"]').type('test').should('have.value', 'test')

    // 폼을 제출합니다.
    cy.get('form').submit()

    // 모달이 나타날 때까지 기다립니다.
    cy.get('#modal-root') // 모달의 클래스 또는 선택자를 사용합니다.
      .should('contain.text', '입력된 이메일이 유효하지 않습니다.') // 모달에 표시된 메시지가 예상한 것인지 확인합니다.
  })
  it('이메일 입력 안함 & 유효한 비밀번호 입력함 | 이메일 입력 요청 모달', () => {
    // 폼의 인풋 요소를 찾아 값을 입력합니다.
    cy.get('input[name="password"]')
      .type('testDEV1234!')
      .should('have.value', 'testDEV1234!')

    // 폼을 제출합니다.
    cy.get('form').submit()

    // 모달이 나타날 때까지 기다립니다.
    cy.get('#modal-root') // 모달의 클래스 또는 선택자를 사용합니다.
      .should('contain.text', '이메일이 입력되지 않았습니다.') // 모달에 표시된 메시지가 예상한 것인지 확인합니다.
  })
  it('이메일 입력 안함 & 비밀번호 입력 안함 | 이메일 입력 요청 모달', () => {
    cy.get('input[name="email"]').should('have.value', '')
    cy.get('input[name="password"]').should('have.value', '')
    // 폼을 제출합니다.
    cy.get('button').click()

    // 모달이 나타날 때까지 기다립니다.
    cy.get('#modal-root') // 모달의 클래스 또는 선택자를 사용합니다.
      .should('contain.text', '이메일이 입력되지 않았습니다.')
  })
  // 서버 통신 단 오류 처리 확인
  it('유효한 이메일 입력 함 & 유효한 비밀번호 입력 & 틀린 비밀번호 로그인 | 틀린 계정 안내 모달', () => {
    // 폼의 인풋 요소를 찾아 값을 입력합니다.
    cy.get('input[name="email"]')
      .type('test@gmail.com')
      .should('have.value', 'test@gmail.com')

    cy.get('input[name="password"]')
      .type('testDEV123!')
      .should('have.value', 'testDEV123!')
    cy.intercept('POST', '/api/auth/callback/credentials').as('login')
    // 폼을 제출합니다.
    cy.get('form').submit()

    cy.wait('@login')
    //wait the response of your GET, then check
    cy.get('#modal-root').then(($modal) => {
      // 모달의 클래스 또는 선택자를 사용합니다.
      cy.wrap($modal).should(
        'contain.text',
        '이메일이나 비밀번호가 올바르지 않습니다.',
      ) // 모달에 표시된 메시지가 예상한 것인지 확인합니다.
    })
  })
  it('유효한 이메일 입력 함 & 유효한 비밀번호 입력 & 틀린 비밀번호 로그인 | 틀린 계정 안내 모달', () => {
    // 폼의 인풋 요소를 찾아 값을 입력합니다.
    cy.get('input[name="email"]')
      .type('test1@gmail.com')
      .should('have.value', 'test1@gmail.com')

    cy.get('input[name="password"]')
      .type('testDEV123!')
      .should('have.value', 'testDEV123!')
    cy.intercept('POST', '/api/auth/callback/credentials').as('login')
    // 폼을 제출합니다.
    // 폼을 제출합니다.
    cy.get('form').submit()

    // 모달이 나타날 때까지 기다립니다.
    cy.wait('@login')
    //wait the response of your GET, then check
    cy.get('#modal-root').then(($modal) => {
      // 모달의 클래스 또는 선택자를 사용합니다.
      cy.wrap($modal).should(
        'contain.text',
        '이메일이나 비밀번호가 올바르지 않습니다.',
      ) // 모달에 표시된 메시지가 예상한 것인지 확인합니다.
    })
  })

  it('로그인 성공 시 home 화면 이동', () => {
    // 로그인 폼의 인풋 요소에 값을 입력합니다.
    cy.get('input[name="email"]').type('test@gmail.com')
    cy.get('input[name="password"]').type('testDEV1234!')

    // 폼을 제출합니다.
    cy.get('form').submit()

    // 로그인 후 페이지가 대시보드로 이동했는지 확인합니다.
    cy.url().should('include', '/home')

    // 홈 페이지에서 메뉴 모두 확인합니다.
    for (const menu of MENU_INFO)
      cy.get('div').should('contain.text', menu.text)
  })
})
