export interface BackgroundTypeInfoProps {
  [key: string]: BackgroundInfoProps
}

export interface BackgroundInfoProps {
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
