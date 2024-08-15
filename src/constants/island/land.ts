import { LandInfoProps } from '@/types/island/land'

const THUMBNAIL_IMG_SRC =
  'https://s3.ap-northeast-2.amazonaws.com/cognisle.shop/media/lands/background/land_dec'
const LAND_IMG_SRC =
  'https://s3.ap-northeast-2.amazonaws.com/cognisle.shop/media/lands/background/land'
const BACKGROUND_IMG_SRC =
  'https://s3.ap-northeast-2.amazonaws.com/cognisle.shop/media/lands/background/bg'

export const LAND_INFO: { [key: number]: LandInfoProps } = {
  1: {
    id: 1,
    title: 'morning',
    img: {
      thumbnail: `${THUMBNAIL_IMG_SRC}1.png`,
      land: `${LAND_IMG_SRC}1.png`,
      bg: `${BACKGROUND_IMG_SRC}1.png`,
    },
  },
  2: {
    id: 2,
    title: 'evening',
    img: {
      thumbnail: `${THUMBNAIL_IMG_SRC}2.png`,
      land: `${LAND_IMG_SRC}2.png`,
      bg: `${BACKGROUND_IMG_SRC}2.png`,
    },
  },
  3: {
    id: 3,
    title: 'night',
    img: {
      thumbnail: `${THUMBNAIL_IMG_SRC}3.png`,
      land: `${LAND_IMG_SRC}3.png`,
      bg: `${BACKGROUND_IMG_SRC}3.png`,
    },
  },
}

export const LAND_CHOICE: LandInfoProps[] = [
  LAND_INFO[1],
  LAND_INFO[2],
  LAND_INFO[3],
]
