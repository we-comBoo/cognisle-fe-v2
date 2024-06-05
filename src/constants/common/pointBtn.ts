import { PointBtnInfoProps } from '@/types'
const MENU_POINT_BTN: PointBtnInfoProps = {
  size: {
    width: 10.8,
  },
  point: {
    width: 2,
  },
  color: {
    main: '--color-green-400',
    point: '--color-pink-100',
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
export { MENU_POINT_BTN, USER_POINT_BTN }
