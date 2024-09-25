import { FONTS } from '@/styles/font'
import { POSITION, BACKGROUND, COLOR } from '@/styles/speechBubble'
import styled from '@emotion/styled'
import Image from 'next/image'
const Talks = () => {
  return (
    <Container>
      <SpeechWrapper position="left">
        <BubbleWrapper position="left">
          <Bubble position="left" isOwner={true}>
            최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자최대글자수는몇글자가좋을까가로로띄어쓰기없이16자로하자
          </Bubble>
          <Time>오후 06:30</Time>
        </BubbleWrapper>
        <ReactionWrapper position="left">
          <Image
            src={`/assets/likes/inactive.svg`}
            width={13}
            height={13}
            alt="채팅 아이콘"
          />
          <div>2</div>
        </ReactionWrapper>
      </SpeechWrapper>

      <SpeechWrapper position="right">
        <BubbleWrapper position="right">
          <Bubble position="right">Ok, Thank you</Bubble>
          <Time>오후 06:30</Time>
        </BubbleWrapper>
        <ReactionWrapper position="right">
          <Image
            src={`/assets/likes/inactive.svg`}
            width={13}
            height={13}
            alt="채팅 아이콘"
          />
          <div>2</div>
        </ReactionWrapper>
      </SpeechWrapper>

      <SpeechWrapper position="left">
        <BubbleWrapper position="left">
          <Bubble position="left"> ut labore et dolore magna </Bubble>
          <Time>오후 06:30</Time>
        </BubbleWrapper>
      </SpeechWrapper>

      <SpeechWrapper position="right">
        <BubbleWrapper position="right">
          <Bubble position="right">👌</Bubble>
          <Time>오후 06:30</Time>
        </BubbleWrapper>
      </SpeechWrapper>
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
  color: var(--color-green-400);

  height: 60rem;
  // 스크롤 관련 설정: 요소가 넘칠 때만 스크롤 가능
  overflow-y: scroll;
  -ms-overflow-style: none; /*IE, Edge*/
  scrollbar-width: none; /*Firefox*/
  ::-webkit-scrollbar {
    display: none; /*Chrome, Safari, Opera*/
    width: 0px;
  }
`

const SpeechWrapper = styled.div<{
  position: 'left' | 'right'
}>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: ${({ position }) =>
    position === 'left' ? 'flex-start' : 'flex-end'};
`
const ReactionWrapper = styled.div<{
  position: 'left' | 'right'
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: ${({ position }) =>
    position === 'left' ? '0 0 0 1.4rem' : '0 1.4rem 0 0'};
`

const BubbleWrapper = styled.div<{
  position: 'left' | 'right'
}>`
  display: flex;
  flex-direction: ${({ position }) =>
    position === 'left' ? 'row' : 'row-reverse'};
  align-items: end;
`

const Time = styled.div``

const Bubble = styled.div<{ position: 'left' | 'right'; isOwner?: boolean }>`
  --r: 1.5rem; /* the radius */
  --t: 1.4rem; /* the size of the tail */

  width: fit-content;
  max-width: 25rem;
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
