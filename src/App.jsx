// componnets
import { Outlet } from 'react-router-dom'
import NavMain from './components/templetes/nav/NavMain';
// utils
import useNProgress from './hooks/useNProgress'
import { saveSubscription } from './redux/actionCreators';


function App() {
  
  useNProgress()
  saveSubscription()

  return (
    <>
      <NavMain />
      <Outlet />
    </>
  )
}



export default App
