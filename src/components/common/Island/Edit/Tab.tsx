import { TabMenuProps } from '@/types/island/edit'
import { Dispatch, SetStateAction } from 'react'
import { PointBtn } from '@/components/common/Button'
import { EDIT_TAB_POINT_BTN } from '@/constants'
import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
interface TabProps {
  menu: TabMenuProps[]
  tabId: TabMenuProps['id']
  setId: Dispatch<SetStateAction<number>>
}

const Tab = ({ menu, tabId, setId }: TabProps) => {
  const handleTabClick = (id: TabMenuProps['id']) => {
    setId(id)
  }
  return (
    <Wrapper>
      {menu.map(({ id, title, value }, idx) => (
        <PointBtn item={EDIT_TAB_POINT_BTN} key={id}>
          <Text onClick={() => handleTabClick(id)}>{title}</Text>
        </PointBtn>
      ))}
    </Wrapper>
  )
}

export default Tab

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Text = styled.span`
  ${FONTS.body5}
  color:var(--color-green-400)
`
