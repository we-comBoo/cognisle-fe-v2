import { IMAGE_ADDRESS } from '@/constants/styles'
import { FONTS } from '@/styles/font'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FRIENDS_MENU_INFO_OBJ } from '@/constants/menu'

const Title = () => {
  const { isReady, query } = useRouter()
  const [title, setTitle] = useState({ show: false, content: '' })
  useEffect(() => {
    if (isReady) {
      const content = FRIENDS_MENU_INFO_OBJ[query.type as string].title

      setTitle({ show: true, content })
    }
  }, [isReady, query.type])
  return (
    <TitleWrapper>
      {title.show && (
        <>
          <p>{title.content}</p>
          <Image
            src={IMAGE_ADDRESS.LAND_TITLE}
            width={51}
            height={21}
            alt="친구섬 찾기 아이콘"
          />
        </>
      )}
    </TitleWrapper>
  )
}

export default Title

const TitleWrapper = styled.div`
  ${FONTS.body2}
  color: var(--color-green-400);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
