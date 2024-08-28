export interface BottomMenuInfoProps {
  link: string
  image: {
    width: number
    height: number
    icon: string
  }
}

export interface FriendsHeaderProps extends BottomMenuInfoProps {
  title: string
}

export type T_FRIENDS_MENU_INFO_OBJ = {
  [key in FriendsHeaderProps['link']]: FriendsHeaderProps
}
