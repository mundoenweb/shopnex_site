// componnets
import { Outlet } from 'react-router-dom'
import NavMain from './components/templetes/nav/NavMain';
// utils
import useNProgress from './hooks/useNProgress'

function App() {

  useNProgress()

  return (
    <>
      <NavMain />
      <Outlet />
    </>
  )
}

export default App;
