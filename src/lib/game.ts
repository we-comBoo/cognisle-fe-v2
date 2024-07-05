import { GameResultProps } from '@/types'

export const symbols = [
  '🍏',
  '🍎',
  '🍋',
  '🍈',
  '🍇',
  '🍈',
  '🍌',
  '🥕',
  '🥐',
  '🍞',
  '🥦',
  '🍄‍🟫',
  '🥮',
  '🍱',
  '🥨',
  '🫓',
  '🥖',
  '🥜',
  '🫘',
  '😀',
  '😉',
  '😊',
  '😚',
  '😙',
  '🥲',
  '😏',
  '😋',
  '🫣',
  '😎',
  '🤥',
]

export function shuffle() {
  const picked = symbols.slice(0, 8)
  return [...picked, ...picked]
    .sort(() => Math.random() - 0.5)
    .map((symbol) => ({ symbol, status: 'faceDown' }))
}

export function getDuration(time: GameResultProps['time']) {
  const { start, end } = time
  if (end && start) {
    const duration = (end.getTime() - start.getTime()) / 1000 // 밀리초 -> 초
    const MMSS = {
      second: Math.ceil(duration % 60),
      minute: Math.floor(duration / 60),
    }
    return MMSS
  }
}
