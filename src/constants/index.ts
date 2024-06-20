import { BACKGROUND_TYPE_INFO } from './common/background'
import IMAGE_ADDRESS from './imageAddress'
import LOCAL_STORAGE_KEY from './localStorageKey'
import { LOGO_TYPE_INFO } from './common/logo'
import { TRIANGLE_TYPE_INFO } from './common/triangle'
import { Bounce } from './common/animations'
import { withAuthList, withOutAuthList, FALLBACK_URL } from './routeUrl'
import { BOTTOM_MENU_INFO } from './menu/bottom'
import { STATE_MODAL_TYPE_INFO } from './modal/state'
import { USER_POINT_BTN, MENU_POINT_BTN } from './common/pointBtn'
import {
  SIGNUP_FORM,
  SIGNUP_INITIAL_VALUES,
  SIGNUP_VALIDATION,
} from './form/signup'
import { LS_EMAIL, LOGIN_INITIAL_VALUES, LOGIN_VALIDATION } from './form/login'
import { VISIT_VALIDATION, VISIT_INITIAL_VALUE } from './form/visit'
export {
  BACKGROUND_TYPE_INFO,
  IMAGE_ADDRESS,
  LOCAL_STORAGE_KEY,
  LOGO_TYPE_INFO,
  TRIANGLE_TYPE_INFO,
  withAuthList,
  withOutAuthList,
  FALLBACK_URL,
  BOTTOM_MENU_INFO,
  STATE_MODAL_TYPE_INFO,
  USER_POINT_BTN,
  MENU_POINT_BTN,
  SIGNUP_FORM,
  SIGNUP_INITIAL_VALUES,
  SIGNUP_VALIDATION,
  Bounce,
  VISIT_VALIDATION,
  VISIT_INITIAL_VALUE,
  LS_EMAIL,
  LOGIN_INITIAL_VALUES,
  LOGIN_VALIDATION,
}
export type { visitProps, visitValidationProps }
