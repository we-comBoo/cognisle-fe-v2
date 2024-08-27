import { Container, Divider, PrimaryBtn, SecondaryBtn } from '../common/style'
import Image from 'next/image'

const MyFriendItem = () => {
  return (
    <Container>
      <div>list</div>
      <button>
        <Image
          src="/assets/green/edit.svg"
          width={36}
          height={36}
          alt="public state Image"
        />
      </button>
    </Container>
  )
}

const Friends = () => {
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1)
  return (
    <>
      {numbers.map((item, idx) => (
        <>
          <MyFriendItem />
          {idx != numbers.length - 1 && <Divider />}
        </>
      ))}
    </>
  )
}
export default Friends
