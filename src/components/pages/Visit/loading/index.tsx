import { Background } from '@/components/common/Layout'
import { Bounce } from '@/constants/styles'
import styled from '@emotion/styled'
import Icon from '@/components/icon'

const Loading = () => {
  return (
    <Background type="visit/loading">
      <IconWrapper>
        <div>
          <Icon
            icon="loading"
            width={240}
            height={245}
            path="assets/land"
            file="land"
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
