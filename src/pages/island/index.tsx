import Status from '@/components/pages/Island/status'
import { NextPageContext } from 'next'
import axios from 'axios'
import { getSession } from 'next-auth/react'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'

const Island = (props: any) => {
  // This useQuery could just as well happen in some deeper child to
  // the "Posts"-page, data will be available immediately either way
  const { queryKey, queryFn } = queryOptions.island(1)
  const { data } = useQuery({ queryKey, queryFn })

  console.log(data)
  return <>island</>
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  console.log(ctx.query)

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
