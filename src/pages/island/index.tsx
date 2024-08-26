import { useEffect } from 'react'
import { NextPageContext } from 'next'
import dynamic from 'next/dynamic'
import { getSession, useSession } from 'next-auth/react'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import { Background } from '@/components/common/Layout'
import { IslandContent, IslandControl } from '@/components/common/Island'
import { useLandActions, useLandStore } from '@/store/island/land'
import { useIsEdit } from '@/store/island/isEdit'
import { useItemsActions } from '@/store/island/items'
import { useOnwerActions } from '@/store/island/owner'

const IslandEdit = dynamic(() => import('@/components/common/Island/Edit'))

const Island = () => {
  const { data: session } = useSession()
  const ownerEmail = session?.user.email

  const { queryKey, queryFn, enabled } = queryOptions.island(ownerEmail)
  const { data: island } = useQuery({
    queryKey,
    queryFn,
    enabled,
    refetchOnMount: 'always', // staleTime과 gcTime 무관 마운트 되는 순간 항상 refetch
  })

  const { setLand } = useLandActions()
  const { batchUpdateItem } = useItemsActions()
  const { setOwner } = useOnwerActions()
  const land = useLandStore()
  const isEdit = useIsEdit()

  useEffect(() => {
    if (island) {
      const { owner, items, land } = island
      setLand({ ...land })
      batchUpdateItem(items)
      setOwner({ owner })
    }
    // console.log('useEffect', island?.items, island?.owner, island?.items)
  }, [island])

  return (
    <>
      <Background type={`island/${land.state}`}>
        <IslandControl />
        <IslandContent />
        {isEdit && <IslandEdit />}
      </Background>
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
