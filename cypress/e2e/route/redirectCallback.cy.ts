import {
  WITH_AUTH_URLs,
  loginUrl,
  email,
  password,
  getRandomInt,
} from './utils'

describe('Login and Redirect Flow', () => {
  beforeEach(() => {
    // 테스트 전에 기본 URL로 돌아가도록 설정
    cy.visit('/')
  })

  it('should redirect to login page if not logged in and trying to access a protected page', () => {
    // 대시보드 페이지 접근 시 로그인 페이지로 리다이렉트되는지 확인
    const protectedURL =
      WITH_AUTH_URLs[getRandomInt(0, WITH_AUTH_URLs.length - 1)]
    cy.visit(protectedURL)
    cy.url().should('include', loginUrl)
    // 로그인 폼에 데이터 입력
    // 인풋 요소를 찾고 텍스트를 입력합니다.
    cy.get('input[name="email"]').type(email).should('have.value', email)

    cy.get('input[name="password"]')
      .type(password)
      .should('have.value', password)
    cy.intercept('POST', '/api/auth/callback/credentials').as('login')
    // 로그인 버튼 클릭
    cy.get('button[type="submit"]').click()
    cy.wait('@login')

    // 로그인 성공 후 대시보드 페이지로 리다이렉트되는지 확인
    cy.url().should('eq', Cypress.config().baseUrl + protectedURL)
  })
})
