import { Name_POINT_BTN } from '@/constants/styles/pointBtn'
import PointBtn from '@/components/common/Button'
import { Text as St } from '../style'

const Name = ({ name }: { name: string }) => {
  return (
    <PointBtn item={Name_POINT_BTN}>
      <St>{name}</St>
    </PointBtn>
  )
}

export default Name
