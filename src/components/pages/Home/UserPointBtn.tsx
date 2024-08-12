import PointBtn from '@/components/common/Button'
import { USER_POINT_BTN } from '@/constants/styles'
import { FONTS } from '@styles/font'
import styled from '@emotion/styled'
import { useSession } from 'next-auth/react'

const UserPointBtn = () => {
  const { data } = useSession()
  console.log('UserPointBtn', data)
  return (
    <PointBtn item={USER_POINT_BTN}>
      <Text>{data?.user.name}</Text>
    </PointBtn>
  )
}

export default UserPointBtn

const Text = styled.div`
  color: var(--color-yellow-100);
  ${FONTS.body5};
`
