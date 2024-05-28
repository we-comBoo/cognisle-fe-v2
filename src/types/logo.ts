export interface LogoProps {
  type: 'primary' | 'header'
  padding: number
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
