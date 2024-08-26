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
interface LandInfoProps {
  id: number
  title: string
  img: LandImageProps
}

export type { LandStoreProps, LandStateProps, LandImageProps, LandInfoProps }
