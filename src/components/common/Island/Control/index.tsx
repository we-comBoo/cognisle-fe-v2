import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'

import Image from 'next/image'
import useIslandContol from './useIslandControl'
import { PointBtn } from '@/components/common/Button'
import { Name_POINT_BTN } from '@/constants/styles/pointBtn'
import { useModalActions, useModalStore } from '@/store/modal'
import { StateModal } from '@/components/common'

const IslandControl = ({ name }: { name: string }) => {
  const { showSaveBtn, modalContent, handleSaveBtn, handleModeBtn } =
    useIslandContol()
  const isOpen = useModalStore()
  const { closeModal } = useModalActions()

  return (
    <StyledRoot>
      {modalContent.content && (
        <>
          <StateModal
            content={modalContent.content}
            type={modalContent.type}
            isOpen={isOpen}
            handleClose={closeModal}
          />
        </>
      )}
      <PointBtn item={Name_POINT_BTN}>
        <Text>{name}</Text>
      </PointBtn>
      <BtnWrapper>
        {showSaveBtn && <SaveBtn onClick={handleSaveBtn}>저장</SaveBtn>}
        <button onClick={handleModeBtn}>
          <Image
            src={`/assets/${showSaveBtn ? 'green' : 'yellow'}/edit.svg`}
            alt="dfsd"
            height={48}
            width={48}
          />
        </button>
      </BtnWrapper>
    </StyledRoot>
  )
}

export default IslandControl

const StyledRoot = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 2.5rem;
  justify-content: space-between;
  position: relative;
  top: 2.4rem;
`

const Text = styled.div`
  color: var(--color-green-400);
  ${FONTS.body5};
`

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`

const SaveBtn = styled.button`
  background-color: var(--color-yellow-100);
  color: var(--color-green-400);
  ${FONTS.body5};
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;
`
