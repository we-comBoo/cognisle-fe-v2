import { Btn as St } from '../style'
import Image from 'next/image'
import { useIsEdit, useIsEditActions } from '@/store/island/isEdit'
import { useEffect } from 'react'

interface EditModeProps {
  handleSaveBtn: () => Promise<void>
  handleModeBtn: () => void
}

const EditMode = ({ handleSaveBtn, handleModeBtn }: EditModeProps) => {
  const isEdit = useIsEdit()
  const { setRead } = useIsEditActions()
  useEffect(() => {
    setRead()
  }, [])

  return (
    <St.StyledRoot>
      {isEdit && <St.Save onClick={handleSaveBtn}>저장</St.Save>}
      <St.Mode onClick={handleModeBtn}>
        <Image
          src={`/assets/${isEdit ? 'green' : 'yellow'}/edit.svg`}
          alt="dfsd"
          height={48}
          width={48}
        />
      </St.Mode>
    </St.StyledRoot>
  )
}

export default EditMode
