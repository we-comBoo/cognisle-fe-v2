import SearchForm from './form'
import styled from '@emotion/styled'
import Icon from '@/components/icon'
import Result from './result'
import { FONTS } from '@/styles/font'
import useFindFriends from './useFindFriends'
import { queryOptions } from '@/lib/ReactQuery/queryOptions'
import { useQuery } from '@tanstack/react-query'
import NoData from './noData'

const FriendsFinding = () => {
  const { errorMsg, submitSearchForm, email } = useFindFriends()
  const { queryKey, queryFn, enabled } = queryOptions.friend(email)
  const { data: Item } = useQuery({ queryKey, queryFn, enabled })

  return (
    <Container>
      <SearchWrapper>
        <SearchForm submitSearchForm={submitSearchForm} />
        {Item?.length ? (
          <Result name={Item[0].name} email={Item[0].email} />
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
