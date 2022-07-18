import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handleUpdateSubscription = (data, id, navigate) => {
  nProgress.start()

  data.cost = parseInt(data.cost, 10) 
  data.commission = parseInt(data.commission, 10) 

  const token = store.getState().user.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/subscriptions/${id}`

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.put(api, data, options)
    .then(() => {
      navigate('/suscriptions')
    })
    .catch(err => {
      console.log(err.response.data)
      alert(err.response.data.messageError.message)
    })
    .then(() => nProgress.done())
}
