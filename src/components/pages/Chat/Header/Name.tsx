import { Name_POINT_BTN } from '@/constants/styles/pointBtn'
import PointBtn from '@/components/common/Button'

const Name = ({ name }: { name: string }) => {
  return <PointBtn item={Name_POINT_BTN}>{name}</PointBtn>
}

export default Name
