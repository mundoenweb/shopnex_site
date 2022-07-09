import {
  IS_PC,
  LOGIN,
  SIGNOFF,
  OPEN_MENU_MAIN_MOVIL
} from "./actions";


// STYLES
export const isComputer = bool => ({
  type: IS_PC,
  bool
})
export const openMenuMovil = style => ({
  type: OPEN_MENU_MAIN_MOVIL,
  style
})

export const startSesion = user => ({
  type: LOGIN,
  user
})
export const closeSesion = () => ({
  type: SIGNOFF,
  user: {}
})
