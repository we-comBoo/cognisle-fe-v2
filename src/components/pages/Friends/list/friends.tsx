import { Container, Divider, PrimaryBtn, SecondaryBtn } from '../common/style'
import Image from 'next/image'

import { useSession } from 'next-auth/react'
import { queryOptions } from '@lib/ReactQuery/queryOptions'
import { useQuery } from '@tanstack/react-query'
import { FriendProps } from '@/types/friends'
import { useRouter } from 'next/router'
const MyFriendItem = ({ name, email }: FriendProps) => {
  const router = useRouter()
  const handleBtnClick = () => {
    router.push(
      {
        pathname: '/island',
        query: { email },
      },
      '/island',
    )
  }

  return (
    <Container>
      <div>{name}</div>
      <button onClick={handleBtnClick}>
        <Image
          src="/assets/green/edit.svg"
          width={36}
          height={36}
          alt="public state Image"
        />
      </button>
    </Container>
  )
}

const Friends = () => {
  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const { queryKey, queryFn, enabled } = queryOptions.myFriendsList(ownerEmail)
  const { data: Friends } = useQuery({ queryKey, queryFn, enabled })
  console.log(Friends)
  return (
    <>
      {Friends &&
        Friends.map(({ name, email }, idx) => (
          <>
            <MyFriendItem name={name} email={email} key={email} />
            {idx !== Friends.length - 1 && <Divider />}
          </>
        ))}
    </>
  )
}
export default Friends
