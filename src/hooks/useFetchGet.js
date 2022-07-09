// hooks
import { useState, useEffect } from "react"
// utils
import nprogress from "nprogress"
import store from "../redux/store"
import axios from "axios"

const useFetchGet = (endPoint) => {
  const [resGeneral, setResGeneral] = useState()
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const token = store.getState().user.token

  useEffect(() => {
    if (!token) return
    nprogress.set(0.3)

    const loadServices = async () => {

      const uri = process.env.REACT_APP_URL_API
      const api = `${uri}/${endPoint}`

      const options = {
        headers: { Authorization: `Bearer ${token}` }
      }
      axios.get(api, options)
        .then(res => {
          setResGeneral(res.data)
          setData(res.data.data)
        })
        .catch(err => {
          setError(err.response.data)
        })
        .then(()=> nprogress.done())
    }

    loadServices()
  }, [endPoint, token])


  return [
    data,
    error,
    { setData },
    resGeneral
  ]
}
export default useFetchGet
