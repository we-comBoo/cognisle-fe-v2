import { useEffect } from 'react'
import { sendPushNotification, registerServiceWorker } from '@/lib/notification'

const Collection = () => {
  const clickPushHandler = async () => {
    sendPushNotification('매직포스 알림', '알림 가나요?')
  }
  useEffect(() => {
    registerServiceWorker()

    // 직접 푸시 알림 테스트
    // sendPushNotification('테스트 알림', '테스트 알림입니다.')
  }, [])

  return (
    <div>
      <button onClick={clickPushHandler}>알림 보내기</button>
    </div>
  )
}

export default Collection
