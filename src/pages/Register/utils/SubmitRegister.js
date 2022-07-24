
import axios from "axios"
import nProgress from "nprogress"

export const SubmitRegister = (
  data, startLogin, navigate, referedBy
) => {
  const api = `${process.env.REACT_APP_URL_API}/register`

  if (data.password_two !== data.password) {
    alert('las contraseñas no coinciden')
    return
  }
  nProgress.start()

  if (referedBy) {
    data.code_referred_by = referedBy
  }

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
      // alert("err.message")
    })
    .then(() => nProgress.done())
}
