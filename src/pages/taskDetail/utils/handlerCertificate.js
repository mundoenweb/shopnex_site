import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handlerCertificate = (evt, user, setUser) => {
  evt.preventDefault()
  nProgress.start()

  const token = store.getState().user.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/users/certificate/${user.id}`

  const data = { certificate: false }
  if (!user.certificate) data.certificate = true

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.put(api, data, options)
    .then(res => {
      setUser(res.data.data)
    })
    .catch(err => {
      alert(err.response.data.messageError.message)
      console.log(err.response.data)
    })
    .then(() => nProgress.done())
}
