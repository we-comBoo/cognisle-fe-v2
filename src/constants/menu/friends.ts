import { FriendsHeaderProps, T_FRIENDS_MENU_INFO_OBJ } from '@/types/styles'

export const FRIENDS_MENU_ROUTE = {
  LIST: 'list',
  PLUS: 'plus',
  LENS: 'lens',
} as const

export const FRIENDS_MENU_INFO: FriendsHeaderProps[] = [
  {
    link: FRIENDS_MENU_ROUTE.LIST,
    title: '친구 목록',
    image: {
      height: 48,
      width: 48,
      icon: FRIENDS_MENU_ROUTE.LENS,
    },
  },
  {
    link: FRIENDS_MENU_ROUTE.PLUS,
    title: '친구 신청',
    image: {
      height: 48,
      width: 48,
      icon: 'plus',
    },
  },
  {
    link: FRIENDS_MENU_ROUTE.LENS,
    title: '친구 찾기',
    image: {
      height: 48,
      width: 48,
      icon: FRIENDS_MENU_ROUTE.LENS,
    },
  },
]

export const FRIENDS_MENU_INFO_OBJ: T_FRIENDS_MENU_INFO_OBJ =
  FRIENDS_MENU_INFO.reduce((acc: T_FRIENDS_MENU_INFO_OBJ, item) => {
    acc[item.link] = item
    return acc
  }, {})
