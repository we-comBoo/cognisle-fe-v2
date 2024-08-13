import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { BOTTOM_MENU_INFO } from '@/constants/menu'
import { BottomMenuInfoProps } from '@/types/styles'
import St from './style'
import Divider from '@components/common/Divider'

const BottomMenu = () => {
  const { pathname } = useRouter()
  // console.log(pathname)
  return (
    <St.Root>
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
    </St.Root>
  )
}

export default BottomMenu
