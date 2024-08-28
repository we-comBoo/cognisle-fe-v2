import { FriendsHeaderProps, T_FRIENDS_MENU_INFO_OBJ } from '@/types/styles'

export const FRIENDS_MENU_INFO: FriendsHeaderProps[] = [
  {
    link: 'list',
    title: '친구 목록',
    image: {
      height: 48,
      width: 48,
      icon: 'list',
    },
  },
  {
    link: 'plus',
    title: '친구 신청',
    image: {
      height: 48,
      width: 48,
      icon: 'plus',
    },
  },
  {
    link: 'lens',
    title: '친구 찾기',
    image: {
      height: 48,
      width: 48,
      icon: 'lens',
    },
  },
]

export const FRIENDS_MENU_INFO_OBJ: T_FRIENDS_MENU_INFO_OBJ =
  FRIENDS_MENU_INFO.reduce((acc: T_FRIENDS_MENU_INFO_OBJ, item) => {
    acc[item.link] = item
    return acc
  }, {})
