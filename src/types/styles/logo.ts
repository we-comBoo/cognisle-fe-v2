export interface LogoProps {
  type: 'primary' | 'secondary'
  padding?: number
}

export interface logoTypeInfoProps {
  [key: string]: logoInfoProps
}

export interface logoInfoProps {
  src: string
  width: number
  height: number
  alt: string
}
