export type ModalStateKeyProps = 'warning' | 'success'
type PageProps = '/login' | '/signup'
export type ModalStateTypeOverlayInfoProps = {
  [key in string]: string
}

export type ModalStateTypeInfoProps = {
  [key in ModalStateKeyProps]: ModalStateInfoProps
}

export interface ModalStateInfoProps {
  color: {
    background: string
    text: string
  }
  img: {
    src: string
    alt: string
  }
}
