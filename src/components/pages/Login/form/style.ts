import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'

export const St = {
  Section: styled.section`
    color: var(--color-green-400);
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 4.8rem;
  `,
  CheckBoxWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2.4rem;
    label {
      margin-left: 0.8rem;
      ${FONTS.caption1}
    }
  `,
  CheckBox: styled.input<{ checked: boolean; imgSrc: string }>`
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
  `,

  Input: styled.input`
    background-color: var(--color-yellow-100);
    width: 28rem;
    height: 4rem;
    ${FONTS.body4};
    padding: 0 1.6rem;
    // margin: 2.4rem;
    &::placeholder {
      color: var(--color-green-400);
    }
  `,

  Link: styled.div`
    text-decoration: underline;
    ${FONTS.body4};
  `,
}
