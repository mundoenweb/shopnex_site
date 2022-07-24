import axios from "axios";
import {
  IS_PC,
  LOGIN,
  SIGNOFF,
  SAVE_SUBSCRIPTION,
  OPEN_MENU_MAIN_MOVIL
} from "./actions";
import store from "./store";


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

export const saveSubscription = idSubs => {
  const id = idSubs || store.getState().user.data.subscriptions_id
  const token = store.getState().user.data.token
  const api = `${process.env.REACT_APP_URL_API}`

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.get(`${api}/subscriptions/${id}`, options)
  .then((res) => {
      const subs = res.data.data[0]
      return store.dispatch({
        type: SAVE_SUBSCRIPTION,
        subscription: subs
      })
    })
}
