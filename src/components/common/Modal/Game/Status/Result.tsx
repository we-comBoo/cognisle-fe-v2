import Image from 'next/image'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { PlayStateProps } from '@/types/game'
import { getDuration } from '@/lib/Game'
import { GAME_RESULT_POINT_BTN } from '@/constants/styles'
import { GAME_ITEM } from '@/constants/game'
import PointBtn from '@/components/common/Button'
import Dotted from '@/components/common/Divider/Dotted'
import { St } from './style'
import { useEffect } from 'react'
import useGameState from './useGameState'

const Result = ({ content }: { content: PlayStateProps }) => {
  const duration = getDuration(content.time)
  const { data: session } = useSession()
  const { submitItems } = useGameState()

  console.log('게임 경과 시간: ', duration, '획득한 아이템', content.obtained)
  useEffect(() => {
    if (content.obtained) {
      submitItems(content)
    }
  }, [content.obtained])
  return (
    <PointBtn item={GAME_RESULT_POINT_BTN}>
      <St.ColunmWrap>
        <St.Text>게임 결과</St.Text>
        <St.SubText>{session?.user.name}</St.SubText>
      </St.ColunmWrap>
      <Dotted type="pink" />
      <St.ColunmWrap>
        <St.Content.Title>
          <Image
            src={'/assets/card/pink.svg'}
            alt="game card"
            height={35}
            width={26}
            style={{ marginRight: '1rem' }}
          />
          <St.SubText>획득한 아이템 종류</St.SubText>
        </St.Content.Title>
        <St.Content.ListWrapper>
          {content.obtained.map(({ number }, idx) => (
            <St.SubText key={idx}>{GAME_ITEM[number].title}</St.SubText>
          ))}
        </St.Content.ListWrapper>
      </St.ColunmWrap>
      <Dotted type="pink" />
      <St.ColunmWrap>
        <St.SubText>뒤집은 횟수 {content.clicked}회</St.SubText>
        <St.SubText>
          플레이 시간 {duration?.minute}분 {duration?.second}초
        </St.SubText>
      </St.ColunmWrap>
    </PointBtn>
  )
}

export default Result
