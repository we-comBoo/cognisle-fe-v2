import { FRIENDS_MENU_INFO } from '@/constants/menu/friends'

import { IMAGE_ADDRESS } from '@/constants/styles'
import { FONTS } from '@/styles/font'
import Image from 'next/image'

import { BottomMenuInfoProps } from '@/types/styles'
import Icon from '@/components/icon'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const Header = () => {
  const router = useRouter()
  const {
    pathname,
    query: { type },
  } = router
  console.log(type)

  const handleClick = (link: string) => {
    console.log(link)
    router.push(`${pathname}?type=${link}`)
  }

  return (
    <StyledRoot>
      {FRIENDS_MENU_INFO.map(
        (
          { image: { icon, width, height }, link }: BottomMenuInfoProps,
          idx,
        ) => (
          <>
            <button onClick={() => handleClick(link)}>
              <Icon
                path={`assets/${link === type ? 'green' : 'yellow'}`}
                file="friends"
                icon={icon}
                width={width}
                height={height}
              />
            </button>
          </>
        ),
      )}
    </StyledRoot>
  )
}

export default Header

const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`
