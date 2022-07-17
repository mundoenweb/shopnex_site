import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handleUpdateTask = (data, idTask, navigate) => {
  nProgress.start()

  const token = store.getState().user.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/tasks/${idTask}`

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.put(api, data, options)
    .then(() => {
      navigate('/tareas')
    })
    .catch(err => {
      console.log(err.response.data)
      alert(err.response.data.messageError.message)
    })
    .then(() => nProgress.done())
}
