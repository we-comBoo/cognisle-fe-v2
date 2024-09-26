import { Name_POINT_BTN } from '@/constants/styles/pointBtn'
import PointBtn from '@/components/common/Button'
import { Text as St } from '../style'
import { useLandStore } from '@/store/island/land'

const Name = ({ name }: { name: string }) => {
  const { state } = useLandStore()
  const item = Name_POINT_BTN(state)

  return (
    <PointBtn item={item}>
      <St color={item.color.secondary ?? ''}>{name}</St>
    </PointBtn>
  )
}

export default Name
