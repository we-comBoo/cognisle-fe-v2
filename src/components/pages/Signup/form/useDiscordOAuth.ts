import { useCallback, useEffect, useState } from 'react'

const useDiscordOAuth = () => {
  const [popup, setPopup] = useState<Window | null>()
  const [dsUser, setDsUser] = useState({
    dsName: '',
    dsId: '',
  })

  // 팝업 열어서 코드 요청
  const handleDiscordOAuthPopup = useCallback((): void => {
    // console.log('팝업 열기!!')
    const url = `https://discord.com/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI}&scope=identify+email`
    // 사용자를 Discord 로그인 페이지로 리디렉션합니다.
    const width = 500
    const height = 400
    const left = window.screenX + (window.outerWidth - width) / 2
    const top = window.screenY + (window.outerHeight - height) / 2
    const popup = window.open(
      url,
      '로그인 중...',
      `width=${width},height=${height},left=${left},top=${top}`,
    )
    setPopup(popup)
  }, [])
  // 팝업을 닫고 null 로 초기화합니다.
  const clearPopup = useCallback((): void => {
    //console.log('팝업 닫기!!', popup)
    if (popup != null) {
      popup.close()
    }
    setPopup(null)
  }, [popup])

  useEffect(() => {
    if (!popup) {
      //console.log('useEffect !popup ', popup)
      return
    }

    const discordOAuthCodeListener = (e: any) => {
      //console.log('discordOAuthCodeListener', popup, e)
      // 동일한 Origin 의 이벤트만 처리하도록 제한
      if (e.origin !== window.location.origin) {
        return
      }
      const { dsName, dsId } = e.data
      if (dsName && dsId) {
        // console.log(` ${dsName} ${dsId} `)
        setDsUser({ dsName, dsId })
      }
      //console.log('discordOAuthCodeListener clearPopup', popup, e)
      clearPopup()
    }

    window.addEventListener('message', discordOAuthCodeListener, false)

    return () => {
      window.removeEventListener('message', discordOAuthCodeListener)
      //console.log('useEffect return clear popup ', popup)
      clearPopup()
    }
  }, [popup])

  return { handleDiscordOAuthPopup, dsUser }
}

export default useDiscordOAuth
