import Finding from '@/components/pages/Friends/finding'
import Header from '@/components/pages/Friends/Header'
import { Background } from '@/components/common/Layout'
import { useRouter } from 'next/router'
import List from '@/components/pages/Friends/list'
import { FRIENDS_MENU_ROUTE } from '@/constants/menu/friends'

const Friends = () => {
  const router = useRouter()
  const {
    pathname,
    query: { type },
  } = router
  return (
    <Background type={`friends`}>
      <Header />
      {type === FRIENDS_MENU_ROUTE.SEARCH && <Finding />}
      {type === FRIENDS_MENU_ROUTE.LIST && <List />}
      {type === FRIENDS_MENU_ROUTE.ADD && <List />}
    </Background>
  )
}

export default Friends
