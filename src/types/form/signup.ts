export interface signupProps {
  [index: string]: string | number
  email: string
  password: string
  name: string
  dsId: string
  dsName: string
}

export type signupValidationProps = (obj: signupProps) => string
