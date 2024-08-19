import Image from 'next/image'
import { IMAGE_ADDRESS } from '@/constants/styles'

const Clear = () => {
  return (
    <Image
      src={IMAGE_ADDRESS.GAME_CLEAR}
      width={254}
      height={254}
      alt="gameClear"
    />
  )
}

export default Clear
