import Land from './Land'
import Items from './Items'
import { Layout as St } from './style'

const IslandContent = () => {
  return (
    <St.StyledRoot>
      <Land />
      <Items />
    </St.StyledRoot>
  )
}

export default IslandContent
