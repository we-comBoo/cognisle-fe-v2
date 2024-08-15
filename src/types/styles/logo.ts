export interface LogoProps {
  type: 'primary' | 'secondary'
  padding?: number
}

export interface LogoTypeInfoProps {
  [key: string]: LogoInfoProps
}

export interface LogoInfoProps {
  icon: string
  width: number
  height: number
}
