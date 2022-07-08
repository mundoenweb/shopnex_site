import {
  stylesInit
} from './stateInitial'
import {
  LOGIN,
  SIGNOFF
} from "./actions";


export const styles = (state = stylesInit, { type }) => {
  switch (type) {
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
