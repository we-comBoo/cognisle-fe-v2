export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}

export const loginUrl = '/login' // 로그인 페이지 URL
export const WITH_AUTH_URLs = [
  '/home',
  '/collection',
  '/game',
  '/island',
  '/visit',
] // 로그인 후 접근할 페이지 URL들
export const email = 'test@gmail.com' // 테스트에 사용할 사용자 이름
export const password = 'testDEV1234!' // 테스트에 사용할 비밀번호
