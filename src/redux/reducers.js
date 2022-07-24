import {
  stylesInit, userInit
} from './stateInitial'
import {
  LOGIN,
  SIGNOFF,
  SAVE_SUBSCRIPTION,
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

export const user = (state = userInit, { type, user, subscription  }) => {
  switch (type) {
    case LOGIN:
      return {
        data: user
      }
    case SAVE_SUBSCRIPTION:
      return {
        ...state,
        subscription
      }
    case SIGNOFF:
      return userInit
    default:
      return state
  }
}
