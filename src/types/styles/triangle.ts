export interface TriangleProps {
  type: 'original' | 'reversed' | 'header' | 'authTitle'
}

export interface TriangleTypeInfoProps {
  [key: string]: TriangleInfoProps
}

export interface TriangleInfoProps {
  src: string
  width: number
  height: number
  alt: string
}
