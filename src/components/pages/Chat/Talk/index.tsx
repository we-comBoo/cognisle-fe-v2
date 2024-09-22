import { POSITION, BACKGROUND, COLOR } from '@/styles/speechBubble'
import styled from '@emotion/styled'

const TalkContainer = () => {
  return (
    <>
      <Bubble position="left" isOwner={true}>
        Bro ipsum dolor sit amet gaper backside single track, manny Bike epic
        clipless. Schraeder drop gondy, rail fatty slash gear jammer steeps
      </Bubble>
      <Bubble position="right">Ok, Thank you</Bubble>
      <Bubble position="left"> ut labore et dolore magna </Bubble>
      <Bubble position="right">👌</Bubble>
    </>
  )
}

export default TalkContainer

const Bubble = styled.div<{ position: 'left' | 'right'; isOwner?: boolean }>`
  --r: 1em; /* the radius */
  --t: 1.5em; /* the size of the tail */

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
`
