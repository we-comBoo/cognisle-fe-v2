import { PlayStateProps } from '@/types/game'

const Matched = ({ content }: { content: PlayStateProps }) => {
  return <div>현재 획득한 아이템 정보 {content.currentMatched?.number}</div>
}

export default Matched
