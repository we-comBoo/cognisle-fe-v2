export interface MenuInfoProps {
  text: string
  link: string
  icon: string
  width: number
  height: number
}

export const MENU_INFO: MenuInfoProps[] = [
  {
    text: '카드 게임',
    link: '/game',
    icon: 'game',
    width: 29,
    height: 39,
  },
  {
    text: '나의 섬',
    link: '/island',
    icon: 'island',
    width: 47,
    height: 36,
  },
  {
    text: '친구 관리',
    link: '/friends?type=list',
    icon: 'visit',
    width: 62,
    height: 36,
  },
  {
    text: '모아보기',
    link: '/collection',
    icon: 'collection',
    width: 35,
    height: 37,
  },
]
