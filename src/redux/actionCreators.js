import {
  IS_PC,
  OPEN_MENU_MOVIL,
  LOGIN,
  SIGNOFF
} from "./actions";



export const isComputer = bool => ({
  type: IS_PC,
  bool
})

export const openMenuMovil = string => ({
  type: OPEN_MENU_MOVIL,
  string
})
export const startSesion = user => ({
  type: LOGIN,
  user
})
export const closeSesion = () => ({
  type: SIGNOFF,
  user: {}
})
