import axios from "axios"
import nProgress from "nprogress"
import store from "../../../redux/store"

export const handleCreateNews = (data, form, navigate) => {
  nProgress.start()

  const formData = new FormData(form)

  const token = store.getState().user.token
  const uri = process.env.REACT_APP_URL_API
  const api = `${uri}/news`
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  axios.post(api, formData, options)
    .then(res => {
      navigate('/noticias')
    })
    .catch(err => {
      console.log(err.response.data)
      alert(err.response.data.messageError.message)
    })
    .then(() => nProgress.done())
}
