import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { colors } from '@/constants'

const opacity = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
`

type SkeletonStyleProps = {
  width: string | number
  height: string | number
}
const Skeleton = styled.div<SkeletonStyleProps>(({ width, height }) => ({
  width,
  height,
  backgroundColor: colors.gray100,
  animation: `${opacity} 2s ease-in-out 0.5s infinite`,
}))

export default Skeleton
