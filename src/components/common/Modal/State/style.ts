import { FONTS } from '@/styles/font'
import { ModalStateInfoProps } from '@/types'
import styled from '@emotion/styled'

const St = {
  ModalWrapper: styled.div<{ color: string }>`
    position: fixed;
    inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
    background-color: ${({ color }) => `${color}`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    z-index: 999;
  `,
  Content: styled.div<{ colorStyle: ModalStateInfoProps['color'] }>`
    width: 25rem;
    height: 6.4rem;
    border-radius: 0 1.5rem 1.5rem 1.5rem;
    background-color: ${({ colorStyle: { background } }) =>
      `var(${background})`};
    color: ${({ colorStyle: { text } }) => `var(${text})`};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    padding: 0 2.4rem;
  `,
  TextWrapper: styled.div`
    ${FONTS.body5}
  `,
  IconWrapper: styled.div`
    padding-right: 1.5rem;
  `,
}

export default St
