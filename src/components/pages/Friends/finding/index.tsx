import SearchForm from './form'
import styled from '@emotion/styled'
import Icon from '@/components/icon'
import Result from './result'
import { FONTS } from '@/styles/font'
import useMakeFriends from './useMakeFriends'
import NoData from './noData'
import StateModal from '@/components/common/Modal/State'
import { useModalActions, useModalStore } from '@/store/modal'

const FriendsFinding = () => {
  const { modal, submitSearchForm, Item, setEmail, isLoading } =
    useMakeFriends()
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()

  return (
    <Container>
      {modal.content && (
        <>
          <StateModal
            content={modal.content}
            type={modal.type}
            isOpen={isOpen}
            handleClose={closeModal}
          />
        </>
      )}
      <SearchWrapper>
        <SearchForm submitSearchForm={submitSearchForm} setEmail={setEmail} />
        {isLoading ? (
          <div>로딩 중...</div>
        ) : Item ? (
          <Result name={Item.name} email={Item.email} />
        ) : (
          <NoData />
        )}
      </SearchWrapper>

      <Icon
        path="assets/land"
        file="land"
        icon="friend"
        width={280}
        height={381}
      />
    </Container>
  )
}

export default FriendsFinding

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: inherit;
  gap: 20rem;
  justify-content: end;
`

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  color: var(--color-green-400);
  ${FONTS.body5}
`
