import { LAND_CHOICE, LAND_INFO } from '@/constants/island'
import Image from 'next/image'
import St from './style'
import { useLandActions } from '@/store/island/land'

const LandSelect = () => {
  const { setLand } = useLandActions()
  const handleClick = (id: number) => {
    const selectedLand = {
      state: id,
      land_img: LAND_INFO[id].img.land,
      bg_img: LAND_INFO[id].img.bg,
    }
    setLand(selectedLand)
  }
  return (
    <St.Land.Root>
      {LAND_CHOICE.map(({ id, title, img }, idx) => (
        <div key={idx} onClick={() => handleClick(id)}>
          <Image src={img.thumbnail} alt={title} width={112} height={112} />
        </div>
      ))}
    </St.Land.Root>
  )
}

export default LandSelect
