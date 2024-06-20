export interface loginProps {
  [index: string]: string | number
  email: string
  password: string
}

export type loginValidationProps = (obj: loginProps) => string
