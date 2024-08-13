import Link from 'next/link'
import Logo from '@/components/common/Logo'
import Triangle from '@/components/common/Triangle'
import St from './style'
const Header = () => {
  return (
    <St.Root>
      <Triangle type="header" />
      <Link href="/">
        <Logo type="secondary" />
      </Link>
    </St.Root>
  )
}

export default Header
