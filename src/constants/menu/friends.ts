import { FriendsHeaderProps, T_FRIENDS_MENU_INFO_OBJ } from '@/types/styles'

export const FRIENDS_MENU_ROUTE = {
  LIST: 'list',
  ADD: 'add',
  SEARCH: 'search',
} as const

export const FRIENDS_MENU_INFO: FriendsHeaderProps[] = [
  {
    link: FRIENDS_MENU_ROUTE.LIST,
    title: '친구 목록',
    image: {
      height: 48,
      width: 48,
      icon: FRIENDS_MENU_ROUTE.LIST,
    },
  },
  {
    link: FRIENDS_MENU_ROUTE.ADD,
    title: '친구 신청',
    image: {
      height: 48,
      width: 48,
      icon: FRIENDS_MENU_ROUTE.ADD,
    },
  },
  {
    link: FRIENDS_MENU_ROUTE.SEARCH,
    title: '친구 찾기',
    image: {
      height: 48,
      width: 48,
      icon: FRIENDS_MENU_ROUTE.SEARCH,
    },
  },
]

export const FRIENDS_MENU_INFO_OBJ: T_FRIENDS_MENU_INFO_OBJ =
  FRIENDS_MENU_INFO.reduce((acc: T_FRIENDS_MENU_INFO_OBJ, item) => {
    acc[item.link] = item
    return acc
  }, {})
