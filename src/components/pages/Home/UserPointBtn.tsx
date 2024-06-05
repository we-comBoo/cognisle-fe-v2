import { PointBtn } from '@/components/common'
import { USER_POINT_BTN } from '@/constants/common/pointBtn'
import { FONTS } from '@styles/font'
import styled from '@emotion/styled'

const UserPointBtn = () => {
  return (
    <PointBtn item={USER_POINT_BTN}>
      <Text>유저 이름이 이름</Text>
    </PointBtn>
  )
}

export default UserPointBtn

const Text = styled.div`
  color: var(--color-yellow-100);
  ${FONTS.body5};
`
