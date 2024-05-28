import styled from '@emotion/styled'

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckBox = styled.input<{ checked: boolean; imgSrc: string }>`
  border: solid 0.3rem var(--color-green-400);
  width: 2.2rem;
  height: 2.2rem;
  background-color: ${({ checked }) =>
    checked ? `var(--color-green-400)` : 'transparent'};
  background-image: ${({ checked, imgSrc }) =>
    checked ? `url(${imgSrc})` : 'none'};

  background-size: 1.5rem 1.2rem;
  background-repeat: no-repeat;
  background-position: center;
`
