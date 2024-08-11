import Land from './Land'
import Items from './Items'
import styled from '@emotion/styled'

const IslandContent = () => {
  return (
    <StyledRoot>
      <Land />
      <Items />
    </StyledRoot>
  )
}

export default IslandContent

const StyledRoot = styled.div`
  position: relative;
  height: 78rem;
  width: 43rem;
`
