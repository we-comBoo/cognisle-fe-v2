export interface backgroundTypeInfoProps {
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
