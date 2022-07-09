import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login/Login"
import Private from "../pages/Private/Private"
import Users from "../pages/users/Users"

const RouterGlobal = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Private />} >
          <Route element={<App />}>

          <Route path="usuarios" >
              <Route index element={<Users />} />
              {/* <Route index element={<Services />} />
              <Route path="nuevo" element={<NewServices />} />
              <Route path="editar/:id" element={<EditServices />} /> */}
            </Route>

          </Route>
        </Route>
        <Route path="*" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouterGlobal
