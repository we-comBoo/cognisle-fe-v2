import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { BOTTOM_MENU_INFO } from '@/constants'
import { BottomMenuInfoProps } from '@/types'
import Divider from '../Divider'

const BottomMenu = () => {
  const { pathname } = useRouter()
  // console.log(pathname)
  return (
    <TabsWrapper>
      {BOTTOM_MENU_INFO.map(
        (
          {
            image: { active, inactive, alt, width, height },
            link,
          }: BottomMenuInfoProps,
          idx,
        ) => (
          <>
            <Link href={link}>
              <Image
                src={link === pathname ? active : inactive}
                alt={alt}
                width={width}
                height={height}
              />
            </Link>
            {idx < BOTTOM_MENU_INFO.length - 1 && <Divider />}
          </>
        ),
      )}
    </TabsWrapper>
  )
}

export default BottomMenu

const TabsWrapper = styled.div`
  /*position: fixed;*/
  bottom: 0;
  width: inherit;

  background-color: var(--color-green-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.8rem 0;
`
