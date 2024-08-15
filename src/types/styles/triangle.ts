export interface TriangleProps {
  type: 'original' | 'reversed' | 'header' | 'authTitle'
}

export interface TriangleTypeInfoProps {
  [key: string]: TriangleInfoProps
}

export interface TriangleInfoProps {
  icon: string
  width: number
  height: number
}
