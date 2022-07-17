import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handleUpdateNews = (data, form, id, navigate) => {
  nProgress.start()

  const formData = new FormData(form)

  const token = store.getState().user.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/news/${id}`
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.put(api, formData, options)
    .then(res => {
      console.log(res)
      navigate('/noticias')
    })
    .catch(err => {
      console.log(err.response.data)
      alert(err.response.data.messageError.message)
    })
    .then(() => nProgress.done())
}
