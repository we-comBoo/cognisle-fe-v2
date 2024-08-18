import { useEffect } from 'react'
import { NextPageContext } from 'next'

import { getSession } from 'next-auth/react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import Items from '@/components/pages/Collection/Items'
import styled from '@emotion/styled'

/// import { sendPushNotification, registerServiceWorker } from '@/lib/notification'

const Collection = () => {
  /*
  const clickPushHandler = async () => {
    sendPushNotification('매직포스 알림', '알림 가나요?')
  }
  useEffect(() => {
    registerServiceWorker()

    // 직접 푸시 알림 테스트
    // sendPushNotification('테스트 알림', '테스트 알림입니다.')
  }, [])
*/
  return (
    <div>
      {/**  <button onClick={clickPushHandler}>알림 보내기</button>*/}

      <Items />
    </div>
  )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const session = await getSession({ req: ctx.req })
  const ownerEmail = session?.user.email

  const queryClient = new QueryClient()
  const { queryKey, queryFn } = queryOptions.collection(ownerEmail)

  await queryClient.prefetchQuery({ queryKey, queryFn })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Collection
