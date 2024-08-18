import { useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import Image from 'next/image'
import { Item as St } from './style'
interface ItemProps {
  own: boolean
  no: number
}
const Items = () => {
  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const { queryKey, queryFn, enabled } = queryOptions.collection(ownerEmail)
  const { data: Items } = useQuery({ queryKey, queryFn, enabled })
  console.log(Items)

  return (
    <St.StyledRoot>
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
    </St.StyledRoot>
  )
}

export default Items
