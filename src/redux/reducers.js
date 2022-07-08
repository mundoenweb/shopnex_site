import { stateApp } from './stateInitial'
import {
  IS_PC,
  OPEN_MENU_MOVIL,
  LOGIN,
  SIGNOFF
} from "./actions";


export const stylesApp = (state = stateApp, { type, bool, string }) => {
  switch (type) {
    case IS_PC:
      return {
        ...state,
        isPc: bool
      }
    case OPEN_MENU_MOVIL:
      return {
        ...state,
        nav: {
          ...state.nav,
          openMenuMovil: string
        }
      }
    default:
      return state
  }
}

export const user = (state = {}, { type, user }) => {
  switch (type) {
    case LOGIN:
      return user
    case SIGNOFF:
      return user
    default:
      return state
  }
}
