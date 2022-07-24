import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handleUpdateUserCredentials = (
  data, form, id, startLogin, navigate
) => {
  nProgress.start()

  const formData = new FormData(form)
  const token = store.getState().user.data.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/users/credentials/${id}`

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.put(api, formData, options)
    .then((res) => {
      res = res.data.data[0]
      const user = res.user
      user.token = res.token

      startLogin(user)
      alert('credenciales subidas con exito, pronto podras acceder a todas las funciones')
      navigate('/usuario')
    })
    .catch(err => {
      console.log(err.response.data)
      alert(err.response.data.messageError.message)
    })
    .then(() => nProgress.done())
}
