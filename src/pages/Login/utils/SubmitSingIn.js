
import axios from "axios"
import nProgress from "nprogress"

export const SubmitSingIn = (data, startLogin, navigate) => {
  nProgress.start()
  const api = `${process.env.REACT_APP_URL_API}/`

  // ajax(api, 'POST', data)
  // return

  axios.post(api, data)
    .then(res => {
      res = res.data.data[0]
      const user = res.user
      user.token = res.token

      startLogin(user)
      navigate("/inicio")

    })
    .catch(function (error) {
      const err = error.response.data.messageError
      alert(err.message)
    })
    .then(()=> nProgress.done())
}
