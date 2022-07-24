import nprogress from "nprogress"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const useNProgress = () => {
  let location = useLocation()

  const [nProgress, setNProgress] = useState()
  
  useEffect(() => {
    if (!nprogress.isStarted()) {
      nprogress.start()
      setNProgress(true)
    }
    setTimeout(() => {
      if (nProgress) nprogress.done()
    }, 333);
  }, [location, nProgress])

  return []
}

export default useNProgress
