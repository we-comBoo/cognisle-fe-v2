import { Background } from '@/components/common'
import { Bounce, IMAGE_ADDRESS } from '@/constants'
import styled from '@emotion/styled'
import Image from 'next/image'

const Loading = () => {
  return (
    <Background type="visit/loading">
      <IconWrapper>
        <div>
          <Image
            src={IMAGE_ADDRESS.LAND_LOADING}
            width="240"
            height="245"
            alt="loading"
            priority
          />
        </div>
      </IconWrapper>
    </Background>
  )
}

export default Loading

const IconWrapper = styled.div`
  width: 24rem;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${Bounce} 2s infinite ease-in-out;
`
