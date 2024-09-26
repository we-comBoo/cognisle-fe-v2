interface LandStoreProps {
  actions: LandActionsProps
  land: LandStateProps
}

interface LandStateProps {
  state: number
  land_img: string
  bg_img: string
}

interface LandActionsProps {
  setLand: (state: LandStateProps) => void
}

interface LandImageProps {
  thumbnail: string
  land: string
  bg: string
}

type Color = { hex: string; alias: string }
interface LandInfoProps {
  id: number
  title: string
  img: LandImageProps
  color: {
    primary: Color
    secondary: Color
    base: Color
  }
}

export type { LandStoreProps, LandStateProps, LandImageProps, LandInfoProps }
