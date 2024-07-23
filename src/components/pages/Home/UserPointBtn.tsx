import { PointBtn } from '@/components/common'
import { USER_POINT_BTN } from '@/constants/styles/pointBtn'
import { FONTS } from '@styles/font'
import styled from '@emotion/styled'
import { useSession } from 'next-auth/react'

const UserPointBtn = () => {
  const { data } = useSession()
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
