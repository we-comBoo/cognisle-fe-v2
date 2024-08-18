import { useEffect } from 'react'
import { NextPageContext } from 'next'

import { getSession } from 'next-auth/react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import Items from '@/components/pages/Collection/Items'
import { Background } from '@/components/common/Layout'
import styled from '@emotion/styled'
import Divider from '@/components/pages/Collection/Divider'
import Status from '@/components/pages/Collection/Status'

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
    <Background type="collection">
      {/**  <button onClick={clickPushHandler}>알림 보내기</button>*/}
      <StyledRoot>
        <Status />
        <Divider />
        <Items />
      </StyledRoot>
    </Background>
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

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
`
