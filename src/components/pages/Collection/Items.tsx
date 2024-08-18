import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import Image from 'next/image'
import styled from '@emotion/styled'
interface ItemProps {
  own: boolean
  no: number
}
const Items = () => {
  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const ownerName = session?.user.name
  const { queryKey, queryFn, enabled } = queryOptions.collection(ownerEmail)
  const { data: Items } = useQuery({ queryKey, queryFn, enabled })
  console.log(Items)

  return (
    <StyledRoot>
      {Items?.length &&
        Items.map(({ no, own }: ItemProps) => (
          <div key={no}>
            <Image
              src={`https://s3.ap-northeast-2.amazonaws.com/cognisle.shop/media/items/dec/${own}/${no}.png`}
              alt={`${no}`}
              width={102}
              height={102}
            />
          </div>
        ))}
    </StyledRoot>
  )
}

export default Items

const StyledRoot = styled.div`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  column-gap: 2.6rem;
  row-gap: 3.1rem;
`
