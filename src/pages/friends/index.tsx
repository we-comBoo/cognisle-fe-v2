import Finding from '@/components/pages/Friends/finding'
import Header from '@/components/pages/Friends/Header'
import { Background } from '@/components/common/Layout'
import { useRouter } from 'next/router'
import List from '@/components/pages/Friends/list'

const Friends = () => {
  const router = useRouter()
  const {
    pathname,
    query: { type },
  } = router
  return (
    <Background type={`friends`}>
      <Header />
      {type === 'lens' && <Finding />}
      {type === 'list' && <List />}
      {type === 'plus' && <Finding />}
    </Background>
  )
}

export default Friends
