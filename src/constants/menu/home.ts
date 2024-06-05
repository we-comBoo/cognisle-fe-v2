export interface MenuInfoProps {
  text: string
  link: string
  img: {
    src: string
    width: number
    height: number
  }
}

export const MENU_INFO: MenuInfoProps[] = [
  {
    text: '카드 게임',
    link: '/game',
    img: { src: '/assets/yellow/game.svg', width: 29, height: 39 },
  },
  {
    text: '나의 섬',
    link: '/island',
    img: { src: '/assets/yellow/island.svg', width: 48, height: 33 },
  },
  {
    text: '놀러가기',

    link: '/visit',
    img: { src: '/assets/yellow/visit.svg', width: 48, height: 33 },
  },
  {
    text: '모아보기',

    link: '/collection',
    img: { src: '/assets/yellow/collection.svg', width: 35, height: 37 },
  },
]
