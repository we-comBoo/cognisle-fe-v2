import Link from 'next/link'
import Logo from '../Logo'

const Header = () => {
  return (
    <Link href="/">
      <Logo type="secondary" />
    </Link>
  )
}

export default Header
