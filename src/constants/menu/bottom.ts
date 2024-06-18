import { BottomMenuInfoProps } from '@/types'

export const BOTTOM_MENU_INFO: BottomMenuInfoProps[] = [
  {
    link: '/game',
    image: {
      active: '/assets/green/game.svg',
      inactive: '/assets/yellow/game.svg',
      height: 36,
      width: 27,
      alt: 'game',
    },
  },
  {
    link: '/island',
    image: {
      active: '/assets/green/island.svg',
      inactive: '/assets/yellow/island.svg',
      height: 36,
      width: 47,
      alt: 'island',
    },
  },
  {
    link: '/visit',
    image: {
      active: '/assets/green/visit.svg',
      inactive: '/assets/yellow/visit.svg',
      height: 36,
      width: 63,
      alt: 'visit',
    },
  },
  {
    link: '/collection',
    image: {
      active: '/assets/green/collection.svg',
      inactive: '/assets/yellow/collection.svg',
      height: 36,
      width: 34,
      alt: 'collection',
    },
  },
]
