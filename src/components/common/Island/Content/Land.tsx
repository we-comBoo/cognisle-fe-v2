import Image from 'next/image'
import { useLandStore } from '@/store/island/land'

const Land = () => {
  const { state, land_img } = useLandStore()
  return (
    <>
      {land_img && (
        <Image src={land_img} alt={`${state}`} fill priority sizes="100%" />
      )}
    </>
  )
}

export default Land
