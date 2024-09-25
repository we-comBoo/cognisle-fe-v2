import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Background } from '@/components/common/Layout'
import Header from '@/components/pages/Chat/Header'
import TalkContainer from '@/components/pages/Chat/Talk'
const Chat = () => {
  const { data: session } = useSession()
  const ownerEmail = session?.user.email
  const router = useRouter()
  const {
    query: { email: friendEmail },
  } = useRouter()
  const email = friendEmail ? friendEmail : ownerEmail
  return (
    <Background type="chat">
      <Header />
      <div>요기 채팅방 주인장:{email}</div>
      <TalkContainer />
    </Background>
  )
}

export default Chat
