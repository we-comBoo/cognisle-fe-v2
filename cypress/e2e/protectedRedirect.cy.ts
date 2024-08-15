describe('Login and Redirect Flow for Multiple Protected Pages', () => {
  const loginUrl = '/login' // 로그인 페이지 URL
  const WITH_AUTH_URLs = ['/home', '/collection', '/game', '/island', '/visit'] // 로그인 후 접근할 페이지 URL들
  const email = 'test@gmail.com' // 테스트에 사용할 사용자 이름
  const password = 'testDEV1234!' // 테스트에 사용할 비밀번호

  beforeEach(() => {
    // 테스트 전에 기본 URL로 돌아가도록 설정
    cy.visit('/')
  })

  it('should redirect to login page if not logged in and trying to access protected pages', () => {
    WITH_AUTH_URLs.forEach((url) => {
      cy.visit(url)
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
      cy.url().should('eq', Cypress.config().baseUrl + url)

      // 다음 URL 테스트를 위해 다시 홈 페이지로 돌아가야서 로그아웃
      cy.visit('/home')
      cy.get('button') // 로그아웃 버틎
        .contains('로그아웃')
        .click()
    })
  })
})
