import {
  stylesInit
} from './stateInitial'
import {
  LOGIN,
  SIGNOFF,
  OPEN_MENU_MAIN_MOVIL
} from "./actions";


export const styles = (state = stylesInit, { type, style }) => {
  switch (type) {
    case OPEN_MENU_MAIN_MOVIL:
      return {
        ...state,
        nav: {
          openNav: style
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
