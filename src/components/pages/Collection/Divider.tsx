import { Divider as St } from './style'
import Image from 'next/image'

const Divider = () => {
  return (
    <St.StyledRoot>
      <Image
        src="/assets/divider/yellow.svg"
        width={292}
        height={4}
        alt="state Dot Line Divider"
      />
    </St.StyledRoot>
  )
}

export default Divider
