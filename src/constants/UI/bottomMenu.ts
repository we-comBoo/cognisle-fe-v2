import { BottomMenuInfoProps } from '@/types'

export const BOTTOM_MENU_INFO: BottomMenuInfoProps[] = [
  {
    link: '/game',
    image: {
      active: '/assets/yellow/game.svg',
      inactive: '/assets/green/game.svg',
      height: 36,
      width: 27,
      alt: 'game',
    },
  },
  {
    link: '/island',
    image: {
      active: '/assets/yellow/island.svg',
      inactive: '/assets/green/island.svg',
      height: 36,
      width: 47,
      alt: 'island',
    },
  },
  {
    link: '/visit',
    image: {
      active: '/assets/yellow/visit.svg',
      inactive: '/assets/green/visit.svg',
      height: 36,
      width: 63,
      alt: 'visit',
    },
  },
  {
    link: '/collection',
    image: {
      active: '/assets/yellow/collection.svg',
      inactive: '/assets/green/collection.svg',
      height: 36,
      width: 34,
      alt: 'collection',
    },
  },
]
