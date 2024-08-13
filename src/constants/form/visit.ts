import { VisitProps, VisitValidationProps } from '@/types/visit'

export const VISIT_VALIDATION: VisitValidationProps = (value) => {
  if (!value) {
    return '친구 코드가 입력되지 않았습니다.'
  }

  return ''
}

export const VISIT_INITIAL_VALUE: VisitProps = ''
