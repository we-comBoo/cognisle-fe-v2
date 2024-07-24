import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MenuBtn from '@/components/pages/Home/MenuBtn'

describe('Home 페이지 컴포넌트', () => {
  it('메뉴 문구 렌더링 확인', () => {
    render(<MenuBtn />)

    // 각 문구가 존재하는지 확인
    expect(screen.getByText('카드 게임')).toBeInTheDocument()
    expect(screen.getByText('나의 섬')).toBeInTheDocument()
    expect(screen.getByText('놀러가기')).toBeInTheDocument()
    expect(screen.getByText('모아보기')).toBeInTheDocument()
  })
})
