import { FONTS } from '@/styles/font'
import { POSITION, BACKGROUND, COLOR } from '@/styles/speechBubble'
import styled from '@emotion/styled'

const Talks = () => {
  return (
    <Container>
      <Bubble position="left" isOwner={true}>
        최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자
      </Bubble>
      <Bubble position="right">Ok, Thank you</Bubble>
      <Bubble position="left"> ut labore et dolore magna </Bubble>
      <Bubble position="right">👌</Bubble>
    </Container>
  )
}

export default Talks

const Container = styled.div`
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
`

const Bubble = styled.div<{ position: 'left' | 'right'; isOwner?: boolean }>`
  --r: 1.5rem; /* the radius */
  --t: 1.4rem; /* the size of the tail */

  width: fit-content;
  max-width: 30rem;
  padding: 1.4rem 2.4rem;
  border-inline: var(--t) solid #0000;
  border-radius: calc(var(--r) + var(--t)) / var(--r);
  mask:
    radial-gradient(100% 100% at var(--_p) 0, #0000 99%, #000 102%) var(--_p)
      100% / var(--t) var(--t) no-repeat,
    linear-gradient(#000 0 0) padding-box;

  ${({ position }) => POSITION({ position })};
  ${({ position, isOwner }) => BACKGROUND({ position, isOwner })};
  ${({ position, isOwner }) => COLOR({ position, isOwner })};
  ${FONTS.body4}
`
