import { Divider } from '@/components/pages/Friends/common/style'
import styled from '@emotion/styled'
import { useSession } from 'next-auth/react'
import useFriendRequest from './useFriendRequest'
import Item from './item'

const Requests = () => {
  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const { Friends } = useFriendRequest({
    email: ownerEmail,
  })
  return (
    <>
      {Friends &&
        Friends.map(({ name, email }, idx) => (
          <>
            <Item name={name} email={email} key={email} />
            {idx != Friends.length - 1 && <Divider />}
          </>
        ))}
    </>
  )
}

export default Requests
