import { LOGO_TYPE_INFO } from '@/constants/styles'

import St from './style'
import { LogoProps } from '@/types/styles'
import Icon from '@/components/icon'

const Logo = ({ type, padding }: LogoProps) => {
  const { icon, width, height } = LOGO_TYPE_INFO[type]

  return (
    <St.Root padding={padding ?? 0}>
      <Icon
        path="assets/logo"
        file="logo"
        icon={icon}
        width={width}
        height={height}
      />
    </St.Root>
  )
}

export default Logo
