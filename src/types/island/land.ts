interface LandStoreProps {
  actions: LandActionsProps
  land: LandStateProps
}

interface LandStateProps {
  type: number
  src: string
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
