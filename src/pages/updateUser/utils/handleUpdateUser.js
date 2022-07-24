import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handleUpdateUser = (data, id, startLogin, navigate) => {
  nProgress.start()

  const token = store.getState().user.data.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/users/${id}`

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.put(api, data, options)
    .then((res) => {
      res = res.data.data[0]
      const user = res.user
      user.token = res.token
      startLogin(user)

      alert('datos actualizados correctamoente, ya solo te falta subir las credenciales.')
      navigate('/usuario/credenciales')
    })
    .catch(err => {
      console.log(err.response.data)
      alert(err.response.data.messageError.message)
    })
    .then(() => nProgress.done())
}
