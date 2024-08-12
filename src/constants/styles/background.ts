import { BackgroundTypeInfoProps } from '@/types/styles'

const BACKGROUND_COLOR = {
  1: { startColor: '--color-blue-100', endColor: '--color-green-300' },
  2: { startColor: '--color-orange-300', endColor: '--color-pink-100' },
  3: { startColor: '--color-blue-300', endColor: '--color-blue-400' },
}

export const BACKGROUND_TYPE_INFO: BackgroundTypeInfoProps = {
  login: {
    img: { src: '/assets/background/triangle.svg', width: 43, height: 84.9 },
    color: {
      start: '--gradient-yellow-100',
      end: '--color-green-300',
      degree: '180deg',
    },
  },
  home: {
    img: { src: '/assets/background/island.svg', width: 25, height: 25 },
    color: {
      start: '--gradient-yellow-100',
      end: '--color-pink-100',
      degree: '180deg',
    },
  },
  signup: {
    img: { src: '/assets/background/triangle.svg', width: 43, height: 84.9 },
    color: {
      start: '--gradient-yellow-100',
      end: '--color-blue-100',
      degree: '180deg',
    },
  },
  'visit/loading': {
    img: { src: '/assets/background/bubble.svg', width: 43, height: 84.9 },
    color: {
      start: '--color-blue-100',
      end: '--color-green-300',
      degree: '180deg',
    },
  },
  'visit/form': {
    img: { src: '', width: 43, height: 84.9 },
    color: {
      start: '--color-blue-100',
      end: '--color-green-300',
      degree: '180deg',
    },
  },
  game: {
    img: { src: '', width: 43, height: 84.9 },
    color: {
      start: '--color-orange-100',
      end: '--color-pink-100',
      degree: '180deg',
    },
  },

  'island/1': {
    img: {
      src: '',
      width: 43,
      height: 100,
    },
    color: {
      start: BACKGROUND_COLOR[1].startColor,
      end: BACKGROUND_COLOR[1].endColor,
      degree: '180deg',
    },
  },
  'island/2': {
    img: {
      src: '',
      width: 43,
      height: 100,
    },
    color: {
      start: BACKGROUND_COLOR[2].startColor,
      end: BACKGROUND_COLOR[2].endColor,
      degree: '180deg',
    },
  },
  'island/3': {
    img: {
      src: '',
      width: 43,
      height: 100,
    },
    color: {
      start: BACKGROUND_COLOR[3].startColor,
      end: BACKGROUND_COLOR[3].endColor,
      degree: '180deg',
    },
  },
}
