import { Status as St } from '../style'
import { useSession } from 'next-auth/react'
import Logo from './Logo'

const Status = () => {
  const { data: user } = useSession()
  return (
    <St.StyledRoot>
      <Logo />
      <St.Text>{user?.user.name}</St.Text>
    </St.StyledRoot>
  )
}

export default Status
