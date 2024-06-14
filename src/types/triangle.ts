export interface TriangleProps {
  type: 'original' | 'reversed' | 'header' | 'authTitle'
}

export interface triangleTypeInfoProps {
  [key: string]: triangleInfoProps
}

export interface triangleInfoProps {
  src: string
  width: number
  height: number
  alt: string
}
