import { PointBtnInfoProps } from '@/types/button'
const MENU_POINT_BTN: PointBtnInfoProps = {
  size: {
    width: 10.8,
  },
  point: {
    width: 30,
  },
  color: {
    main: '--color-green-400',
    point: '--color-pink-100',
  },
  round: true,
}
const EDIT_TAB_POINT_BTN: PointBtnInfoProps = {
  size: {
    width: 12,
    height: 4,
  },
  point: {
    width: 30,
    height: 85,
  },
  color: {
    main: '--color-yellow-100',
    point: '--color-green-400',
  },
  round: false,
}

const Name_POINT_BTN: PointBtnInfoProps = {
  size: {
    width: 20,
    height: 5,
  },
  point: {
    width: 20,
    height: 50,
  },
  color: {
    main: '--color-yellow-100',
    point: '--color-green-400',
  },
  round: true,
}

const USER_POINT_BTN: PointBtnInfoProps = {
  size: {
    width: 20,
    height: 4.8,
  },
  point: {
    width: 20,
    height: 50,
  },
  color: {
    main: '--color-pink-100',
    point: '--color-green-400',
  },
  round: true,
}

const GAME_START_POINT_BTN: PointBtnInfoProps = {
  size: {
    width: 23.3,
    height: 10.7,
  },
  point: {
    width: 20,
    height: 50,
  },
  color: {
    main: '--color-yellow-100',
    point: '--color-orange-300',
  },
  round: true,
}
export {
  EDIT_TAB_POINT_BTN,
  Name_POINT_BTN,
  MENU_POINT_BTN,
  USER_POINT_BTN,
  GAME_START_POINT_BTN,
}
