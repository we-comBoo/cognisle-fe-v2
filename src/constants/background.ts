export interface backgroundTypeProps {
  [key: string]: backgroundInfoProps
}

export interface backgroundInfoProps {
  img: {
    src: string
    width: number
    height: number
  }
  color: {
    start: string
    end: string
    degree: string
  }
}

export const BACKGROUND_TYPE: backgroundTypeProps = {
  login: {
    img: { src: '/assets/background/triangle.png', width: 43, height: 84.9 },
    color: {
      start: '--gradient-yellow-100',
      end: '--color-green-300',
      degree: '180deg',
    },
  },
}
