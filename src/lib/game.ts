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
