import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { FALLBACK_URL, withAuthList, withOutAuthList } from './constants'

const withAuth = async (req: NextRequest, token: string | undefined) => {
  const url = req.nextUrl.clone()
  const { pathname } = req.nextUrl

  if (!token || token == undefined) {
    //토큰값이 falsy한 사용자가 withAuth페이지에 진입하려하면,
    //미들웨어에서 req객체 중에 NextUrl 안에 담긴 pathname을 쿼리스트링을 붙여서 로그인페이지로 리다이렉트 시킴
    url.pathname = '/login'
    //로그인하면 이전페이지로 이동하기 위해서 쿼리스트링사용하여 붙여줌.
    url.search = `callbackUrl=${pathname}`
    // console.log('보호된 페이지 접근 실패', url)
    return NextResponse.redirect(url)
  }
}

const withOutAuth = async (
  req: NextRequest,
  token: boolean,
  to: string | null,
) => {
  // console.log(token)
  const url = req.nextUrl.clone()
  const { pathname } = req.nextUrl
  console.log(token, url, 'withoutAuth')

  if (token) {
    // 토큰 있는 경우
    url.pathname = to ?? FALLBACK_URL
    url.search = ''
    // console.log('토큰있는 경우', url)

    return NextResponse.redirect(url)
  }
}

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req })

  //setting Headers
  const requestHeaders = new Headers(req.headers)

  const { searchParams } = req.nextUrl
  const callbackUrl = searchParams.get('callbackUrl')
  const pathname = req.nextUrl.pathname

  const isWithAuth = withAuthList.includes(pathname)
  const isWithOutAuth = withOutAuthList.includes(pathname)
  // console.log(pathname)

  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  if (isWithAuth) {
    return withAuth(req, token?.access) || response
  } else if (isWithOutAuth) {
    return withOutAuth(req, Boolean(token?.access), callbackUrl) || response
  }

  return response
}

// 미들웨어가 실행될 특정 pathname을 지정하면, 해당 pathname에서만 실행 가능
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
}
