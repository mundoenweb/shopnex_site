import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handlerActiveTask = (evt, task, setTask) => {
  evt.preventDefault()
  nProgress.start()

  const token = store.getState().user.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/tasks/${task.id}`

  const data = { active: false }
  if (!task.active) data.active = true

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.put(api, data, options)
    .then(res => {
      setTask(res.data.data)
    })
    .catch(err => {
      alert(err.response.data.messageError.message)
      console.log(err.response.data)
    })
    .then(() => nProgress.done())
}
