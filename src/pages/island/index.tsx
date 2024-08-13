import { NextPageContext } from 'next'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { getSession, useSession } from 'next-auth/react'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import { useLandActions, useLandStore } from '@/store/island/land'
import { Background } from '@/components/common/Layout'
import { IslandContent, IslandControl } from '@/components/common/Island'
import { useIsEdit } from '@/store/island/isEdit'

const IslandEdit = dynamic(() => import('@/components/common/Island/Edit'))

const Island = () => {
  // This useQuery could just as well happen in some deeper child to
  // the "Posts"-page, data will be available immediately either way
  const { data: session } = useSession()
  const ownerId = session?.user.user_id
  const ownerName = session?.user.name
  const { queryKey, queryFn, enabled } = queryOptions.island(ownerId)
  const { data: island } = useQuery({ queryKey, queryFn, enabled })

  const { setLand } = useLandActions()
  const land = useLandStore()
  const isEdit = useIsEdit()

  useEffect(() => {
    if (island) {
      console.log(island.land)
      setLand({ type: island.land.state, src: island.land.land_img })
    }
  }, [island])

  return (
    <>
      <Background type={`island/${land.type}`}>
        <IslandControl name={ownerName} />
        <IslandContent />
      </Background>
      {isEdit && <IslandEdit />}
    </>
  )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const session = await getSession({ req: ctx.req })
  const ownerId = session?.user.user_id

  const queryClient = new QueryClient()
  const { queryKey, queryFn } = queryOptions.island(ownerId)

  await queryClient.prefetchQuery({ queryKey, queryFn })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Island
