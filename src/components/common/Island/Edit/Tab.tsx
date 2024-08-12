import { TabMenuProps } from '@/types/island/edit'
import { Dispatch, SetStateAction } from 'react'
import PointBtn from '@/components/common/Button'
import { EDIT_TAB_POINT_BTN } from '@/constants/styles'
import St from './style'

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
    <St.Tab.Root>
      {menu.map(({ id, title, value }, idx) => (
        <PointBtn item={EDIT_TAB_POINT_BTN} key={id}>
          <St.Tab.Text onClick={() => handleTabClick(id)}>{title}</St.Tab.Text>
        </PointBtn>
      ))}
    </St.Tab.Root>
  )
}

export default Tab
