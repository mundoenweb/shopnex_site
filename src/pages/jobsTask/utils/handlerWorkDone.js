import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handlerWorkDone = (
  event, task, userId, referedBy, commissionPercentage, navigate
) => {
  event.preventDefault()
  nProgress.start()

  const token = store.getState().user.data.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/movements/task`

  const data = {
    users_id: userId,
    mount: task.cost,
    commission_task: task.cost * (commissionPercentage / 100),
    tasks_id: task.id,
    type_transactions_id: 3,
    referedBy: referedBy
  }

  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.post(api, data, options)
    .then(res => {
      console.log(res.data)
      alert('tarea realizada con exito')
      navigate(`/tareas/trabajorealizado/${data.commission_task}`)
    })
    .catch(err => {
      alert(err.response.data.messageError.message)
      console.log(err.response.data)
    })
    .then(() => nProgress.done())
}
