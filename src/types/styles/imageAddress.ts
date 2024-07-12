export const IMAGE_ADDRESS = {
  EMAIL_CHECK_BOX: '/assets/yellow/marked.svg',
  LAND_LOADING: '/assets/land/loading.svg',
  LAND_FORM: '/assets/green/search.svg',
  LAND_TITLE: '/assets/green/squiggly.svg',
  LAND_FRIEND: '/assets/land/friend.svg',
  GAME_CLEAR: '/assets/card/clear.svg',
  CARD_FACE_DOWN: '/assets/card/faceDown.svg',
} as const

export type IMAGE_ADDRESS_KEY =
  (typeof IMAGE_ADDRESS)[keyof typeof IMAGE_ADDRESS]
