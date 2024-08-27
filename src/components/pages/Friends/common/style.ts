import styled from '@emotion/styled'

export const Container = styled.div`
  box-sizing: border-box;
  background-color: var(--color-yellow-100);
  height: 4rem;
  width: 100%;
  padding: 0.5rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  padding: 0.3rem 0.5rem;
`
export const PrimaryBtn = styled(Button)`
  color: var(--color-green-300);
  background-color: var(--color-green-400);
`

export const SecondaryBtn = styled(Button)`
  background-color: var(--color-green-300);
  color: var(--color-green-400);
`

export const Divider = styled.hr`
  border-top: 0.3rem solid #f2eba7;
  width: 100%;
`
