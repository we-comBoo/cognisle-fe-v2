import SearchForm from './form'
import styled from '@emotion/styled'
import Icon from '@/components/icon'
import Result from './result'
import { FONTS } from '@/styles/font'

const FriendsFinding = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchForm />
        <Result />
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
