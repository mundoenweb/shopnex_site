// componnets
import { Outlet } from 'react-router-dom'
// utils
import useNProgress from './hooks/useNProgress'

function App() {

  useNProgress()

  return (
    <>
      <Outlet />
    </>
  )
}

export default App;
