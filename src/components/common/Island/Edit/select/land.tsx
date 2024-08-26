import { LAND_CHOICE } from '@/constants/island'
import Image from 'next/image'
import St from '../style'

import useIslandEdit from './useIslandEdit'

const LandSelect = () => {
  const { handleLandClick } = useIslandEdit()

  return (
    <St.Land.Root>
      {LAND_CHOICE.map(({ id, title, img }, idx) => (
        <div key={idx} onClick={() => handleLandClick(id)}>
          <Image src={img.thumbnail} alt={title} width={112} height={112} />
        </div>
      ))}
    </St.Land.Root>
  )
}

export default LandSelect
