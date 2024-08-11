import { LAND_CHOICE, LAND_INFO } from '@/constants/island/land'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useLandActions } from '@/store/island/land'

const LandSelect = () => {
  const { setLand } = useLandActions()
  const handleClick = (id: number) => {
    const selectedLand = { type: id, src: LAND_INFO[id].img.land }
    setLand(selectedLand)
  }
  return (
    <Wrapper>
      {LAND_CHOICE.map(({ id, title, img }, idx) => (
        <div key={idx} onClick={() => handleClick(id)}>
          <Image src={img.thumbnail} alt={title} width={112} height={112} />
        </div>
      ))}
    </Wrapper>
  )
}

export default LandSelect

const Wrapper = styled.div`
  padding: 2.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
