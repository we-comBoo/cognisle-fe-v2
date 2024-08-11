import { TabMenuProps } from '@/types/island/edit'
import { useState } from 'react'
import styled from '@emotion/styled'
import Tab from './Tab'
import LandSelect from './LandSelect'
import ItemSelect from './ItemSelect'
import { TAB_MENU } from '@/constants/island/edit'

const Edit = () => {
  const [tabId, setTabId] = useState<TabMenuProps['id']>(0)
  return (
    <EditWrapper>
      <Tab menu={TAB_MENU} tabId={tabId} setId={setTabId} />
      <SelectWrapper>
        {tabId === 0 ? <LandSelect /> : <ItemSelect />}
      </SelectWrapper>
    </EditWrapper>
  )
}
export default Edit

const EditWrapper = styled.div`
  /*z-index: 9998;*/
  position: absolute;
  bottom: -7.5rem;
  width: inherit;
`
const SelectWrapper = styled.div`
  height: 16.8rem;
  background-color: var(--color-yellow-100);
`
