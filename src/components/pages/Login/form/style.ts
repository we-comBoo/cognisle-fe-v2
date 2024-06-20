import styled from '@emotion/styled'
import { FONTS } from '@/styles/font'
import { FormBtn, CheckBox, CheckBoxWrapper } from '@/components/common'

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
    width: 28rem;
    gap: 2.4rem;
    margin-bottom: 4.8rem;
  `,
  CheckBoxWrapper: styled(CheckBoxWrapper)`
    margin-top: 2.4rem;
    label {
      margin-left: 0.8rem;
      ${FONTS.body10}
    }
  `,
  CheckBox: styled(CheckBox)``,

  Input: styled.input`
    background-color: var(--color-yellow-100);

    height: 4rem;
    ${FONTS.body4};
    padding: 0 1.6rem;
    &::placeholder {
      color: var(--color-green-400);
    }
  `,
  LoginBtn: FormBtn,

  Link: styled.div`
    text-decoration: underline;
    ${FONTS.body4};
  `,
}
