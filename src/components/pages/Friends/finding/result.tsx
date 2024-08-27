import styled from '@emotion/styled'
import { Container, PrimaryBtn } from '../common/style'

const Friend = () => {
  const handleRequestBtn = () => {
    console.log('handleRequestBtn')
  }
  return (
    <Container>
      <span>친구분 이름</span>
      <PrimaryBtn onClick={handleRequestBtn}>친구 신청</PrimaryBtn>
    </Container>
  )
}

const NoData = () => {
  return <span>검색 결과가 없습니다.</span>
}

const Result = () => {
  return <NoData />
}

export default Result
