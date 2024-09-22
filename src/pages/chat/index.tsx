import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Chat = () => {
  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const router = useRouter()
  const {
    query: { email: friendEmail },
  } = useRouter()
  const email = friendEmail ? friendEmail : ownerEmail
  return <div>요기 채팅방 주인장:{email}</div>
}

export default Chat
