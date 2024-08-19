import { PlayStateProps } from '@/types/game'

import { getDuration } from '@/lib/Game'

const Result = ({ content }: { content: PlayStateProps }) => {
  const duration = getDuration(content.time)
  // console.log('게임 경과 시간: ', duration, '획득한 아이템', content.obtained)
  return <div> 게임 결과 보이기 모달 {duration?.second} </div>
}

export default Result
