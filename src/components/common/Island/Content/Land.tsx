import styled from '@emotion/styled'
import Image from 'next/image'
import { useLandStore } from '@/store/island/land'

const Land = () => {
  const land = useLandStore()
  return (
    <Wrppaer>
      <Image src={land.src} alt={`${land.type}`} fill priority sizes="100%" />
    </Wrppaer>
  )
}

export default Land

const Wrppaer = styled.div`
  width: 43rem;
  height: 78rem;
  position: relative;
`
