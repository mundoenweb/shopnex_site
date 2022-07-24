import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handleUpdateBank = (data, id, navigate) => {
  // nProgress.start()

  const token = store.getState().user.data.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/banks_users/${id}`

  data.banks_id = parseInt(data.banks_id, 10)

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.put(api, data, options)
    .then(() => {
      navigate('/usuario')
    })
    .catch(err => {
      console.log(err.response.data)
      alert(err.response.data.messageError.message)
    })
    .then(() => nProgress.done())
}
