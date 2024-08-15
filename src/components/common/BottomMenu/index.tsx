import Link from 'next/link'
import { useRouter } from 'next/router'

import { BOTTOM_MENU_INFO } from '@/constants/menu'
import { BottomMenuInfoProps } from '@/types/styles'
import St from './style'
import Divider from '@components/common/Divider'
import Icon from '@/components/icon'

const BottomMenu = () => {
  const { pathname } = useRouter()
  // console.log(pathname)
  return (
    <St.Root>
      {BOTTOM_MENU_INFO.map(
        (
          { image: { icon, width, height }, link }: BottomMenuInfoProps,
          idx,
        ) => (
          <>
            <Link href={link}>
              <Icon
                path={`assets/${link === pathname ? 'green' : 'yellow'}`}
                file="menu"
                icon={icon}
                width={width}
                height={height}
              />
            </Link>
            {idx < BOTTOM_MENU_INFO.length - 1 && <Divider />}
          </>
        ),
      )}
    </St.Root>
  )
}

export default BottomMenu
