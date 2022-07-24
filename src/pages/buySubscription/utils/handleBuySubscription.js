import axios from "axios"
import nProgress from "nprogress"
import { saveSubscription } from "../../../redux/actionCreators"
import store from "../../../redux/store"

export const handleBuySubscription = (data, navigate) => {
  nProgress.start()

  const token = store.getState().user.data.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/movements/buy`

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.post(api, data, options)
    .then((res) => {
      saveSubscription()
      console.log(res.data)
      setTimeout(() => {
        navigate('/susbcripciones/compra_exitosa')
      }, 1500);
    })
    .catch(err => {
      console.log(err.response.data)
      alert(err.response.data.messageError.message)
    })
    .then(() => nProgress.done())
}
