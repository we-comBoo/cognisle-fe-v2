import { visitProps, visitValidationProps } from '@/types'

export const VISIT_VALIDATION: visitValidationProps = (value) => {
  if (!value) {
    return '친구 코드가 입력되지 않았습니다.'
  }

  return ''
}

export const VISIT_INITIAL_VALUE: visitProps = ''
