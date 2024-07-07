import {
  ModalStateTypeInfoProps,
  ModalStateTypeOverlayInfoProps,
} from '@/types'
export const STATE_MODAL_TYPE_OVERLAY: ModalStateTypeOverlayInfoProps = {
  '/login': 'rgba(115, 216, 156, 0.6)',
  '/signup': 'rgba(145, 206, 237, 0.6)',
  '/visit': 'rgba(145, 206, 237, 0.6)',
  '/game': 'rgba(255, 195, 97, 0.6)',
}

export const STATE_MODAL_TYPE_INFO: ModalStateTypeInfoProps = {
  warning: {
    color: {
      background: '--color-orange-300',
      text: '--color-yellow-100',
    },
    img: {
      src: '/assets/yellow/warning.svg',
      alt: 'warning icon svg',
    },
  },
  success: {
    color: {
      background: '--color-yellow-100',
      text: '--color-green-400',
    },
    img: {
      src: '/assets/green/success.svg',
      alt: 'success icon svg',
    },
  },
}
