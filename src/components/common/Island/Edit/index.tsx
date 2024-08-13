import { TabMenuProps } from '@/types/island/edit'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Tab from './Tab'
import LandSelect from './LandSelect'

import { TAB_MENU } from '@/constants/island'
import St from './style'

const ItemSelect = dynamic(() => import('./ItemSelect'))

const Edit = () => {
  const [tabId, setTabId] = useState<TabMenuProps['id']>(0)
  return (
    <St.Root>
      <Tab menu={TAB_MENU} tabId={tabId} setId={setTabId} />
      <St.Select>{tabId === 0 ? <LandSelect /> : <ItemSelect />}</St.Select>
    </St.Root>
  )
}
export default Edit
