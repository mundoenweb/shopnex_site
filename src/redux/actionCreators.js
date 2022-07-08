import {
  IS_PC,
  LOGIN,
  SIGNOFF
} from "./actions";



export const isComputer = bool => ({
  type: IS_PC,
  bool
})

export const startSesion = user => ({
  type: LOGIN,
  user
})
export const closeSesion = () => ({
  type: SIGNOFF,
  user: {}
})
