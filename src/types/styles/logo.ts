export interface LogoProps {
  type: 'primary' | 'secondary'
  padding?: number
}

export interface LogoTypeInfoProps {
  [key: string]: LogoInfoProps
}

export interface LogoInfoProps {
  src: string
  width: number
  height: number
  alt: string
}
