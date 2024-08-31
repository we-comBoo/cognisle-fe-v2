import styled from '@emotion/styled'
import RequestsList from './requests'
import FriendItem from './friends'
import { FONTS } from '@/styles/font'
import { useRouter } from 'next/router'
import { FRIENDS_MENU_ROUTE } from '@/constants/menu/friends'
const List = () => {
  const {
    query: { type },
  } = useRouter()
  return (
    <StyledRoot>
      {type === FRIENDS_MENU_ROUTE.LIST && <FriendItem />}
      {type === FRIENDS_MENU_ROUTE.PLUS && <RequestsList />}
    </StyledRoot>
  )
}

export default List

const StyledRoot = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  width: 32rem;
  height: 70rem;
  background-color: var(--color-yellow-100);
  color: var(--color-green-400);
  ${FONTS.body5}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // 스크롤 관련 설정: 요소가 넘칠 때만 스크롤 가능
  overflow-y: scroll;
  -ms-overflow-style: none; /*IE, Edge*/
  scrollbar-width: none; /*Firefox*/
  ::-webkit-scrollbar {
    display: none; /*Chrome, Safari, Opera*/
    width: 0px;
  }
`
