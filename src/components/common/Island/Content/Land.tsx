import Image from 'next/image'
import { useLandStore } from '@/store/island/land'

const Land = () => {
  const { src, type } = useLandStore()
  return (
    <>{src && <Image src={src} alt={`${type}`} fill priority sizes="100%" />}</>
  )
}

export default Land
