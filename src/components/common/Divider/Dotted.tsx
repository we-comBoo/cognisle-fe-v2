import St from './style'
import Image from 'next/image'

const Dotted = ({ type }: { type: 'pink' | 'yellow' }) => {
  return (
    <St.StyledRoot>
      <Image
        src={`/assets/divider/${type}.svg`}
        width={292}
        height={4}
        alt="state Dot Line Divider"
      />
    </St.StyledRoot>
  )
}

export default Dotted
