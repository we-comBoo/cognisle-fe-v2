import { Colors, Gradients, IMAGE_ADDRESS, Shadows } from '@/constants/styles'

export type IMAGE_ADDRESS_KEY =
  (typeof IMAGE_ADDRESS)[keyof typeof IMAGE_ADDRESS]

export type Colors = keyof typeof Colors

export type Shadows = keyof typeof Shadows

export type Gradients = keyof typeof Gradients
