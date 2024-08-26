import { GAME_START_POINT_BTN } from '@/constants/styles'
import PointBtn from '@/components/common/Button'
import St from '../style'

const Start = () => {
  return (
    <PointBtn item={GAME_START_POINT_BTN}>
      <St.Text>게임 시작</St.Text>
    </PointBtn>
  )
}

export default Start
