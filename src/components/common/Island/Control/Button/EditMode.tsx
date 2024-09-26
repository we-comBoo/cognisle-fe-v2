import { Btn as St } from '../style'
import Image from 'next/image'
import { useIsEdit, useIsEditActions } from '@/store/island/isEdit'
import { useEffect } from 'react'
import EditIcon from '@/components/common/Icon/edit'
import { LAND_INFO } from '@/constants/island'
import { useLandStore } from '@/store/island/land'

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

  const { state } = useLandStore()
  const {
    color: { primary, secondary, base },
  } = LAND_INFO[state]
  return (
    <St.StyledRoot>
      {isEdit && (
        <St.Save onClick={handleSaveBtn} color={secondary.alias}>
          저장
        </St.Save>
      )}
      <St.Mode onClick={handleModeBtn}>
        <EditIcon primary={primary} secondary={secondary} base={base} />
        {/*<Image
          src={`/assets/${isEdit ? 'green' : 'yellow'}/edit.svg`}
          alt="dfsd"
          height={48}
          width={48}
        />*/}
      </St.Mode>
    </St.StyledRoot>
  )
}

export default EditMode
