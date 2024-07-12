import { colors, gradients, IMAGE_ADDRESS, shadows } from '@/constants'

export type IMAGE_ADDRESS_KEY =
  (typeof IMAGE_ADDRESS)[keyof typeof IMAGE_ADDRESS]

export type Colors = keyof typeof colors

export type Shadows = keyof typeof shadows

export type Gradients = keyof typeof gradients
