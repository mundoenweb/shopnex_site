import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handleDeleteTask = (evt, id, tasks, setTasks) => {
  evt.preventDefault()
  const confirmation = window.confirm('seguro desea eliminar la tarea')
  if (!confirmation) return 

  nProgress.start()

  const token = store.getState().user.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/tasks/${id}`

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }
  axios.delete(api, options)
    .then(() => {
      setTasks(tasks.filter(t => t.id !== id))
    })
    .catch(err => {
      console.log(err.response.data)
      alert(err.response.data.messageError.message)
    })
    .then(() => nProgress.done())
}
