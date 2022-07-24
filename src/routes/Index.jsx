import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login/Login"
import Private from "../pages/Private/Private"
import Tasks from "../pages/tasks/Tasks"
import News from "../pages/news/News"
import NewsDetail from "../pages/newDetail/NewsDetail"
import MovementTaskDetail from "../pages/movementTaskDetail.jsx/movementTaskDetail"
import Subscriptions from "../pages/subscriptions/Subscriptions"
import SubscriptionDetail from "../pages/subscriptionDetail/SubscriptionDetail"
import Register from "../pages/Register/Register"
import PendingCertificate from "../pages/pendingCertificate/PendingCertificate"
import UpdateUser from "../pages/updateUser/UpdateUser"
import UpdateUserCredentials from "../pages/updateUserCredentials/UpdateUserCredentials"
import UserDetail from "../pages/UserDetail.jsx/UserDetail"
import JobsTask from "../pages/jobsTask/JobsTask"
import Inicio from "../pages/inicio/Inicio"
import JobsSuccess from "../pages/jobsSuccess/JobsSuccess"
import HystoriTask from "../pages/hystoriTask/HystoriTask"
import Referreds from "../pages/referreds/Referreds"
import Help from "../pages/help/Help"
import BuySubscription from "../pages/buySubscription/BuySubscription"
import BuySuccess from "../pages/buySuccess/BuySuccess"
import CreateBank from "../pages/createBank/CreateBank"
import UpdateBank from "../pages/updateBank/UpdateBank"

const RouterGlobal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route element={<Private />} >
          <Route element={<App />}>

            <Route path="inicio" >
              <Route index element={<Inicio />} />
            </Route>

            <Route path="tareas" >
              <Route index element={<Tasks />} />
              <Route path=":id" element={<JobsTask />} />
              <Route path="trabajorealizado/:profit" element={<JobsSuccess />} />
              <Route path="historial" element={<HystoriTask />} />
              <Route path="detailTask" element={<HystoriTask />} />
            </Route>


            <Route path="usuario" >
              <Route index element={<UserDetail />} />
              <Route path="pendiente" element={<PendingCertificate />} />
              <Route path="actualizar_datos" element={<UpdateUser />} />
              <Route path="credenciales" element={<UpdateUserCredentials />} />
              <Route path="referidos" element={<Referreds />} />
              <Route path="crear_cuenta" element={<CreateBank />} />
              <Route path="actualizar_banco/:id" element={<UpdateBank />} />
            </Route>

            <Route path="movement" >
              <Route path="task/:id" element={<MovementTaskDetail />} />
            </Route>


            <Route path="noticias" >
              <Route index element={<News />} />
              <Route path="detalle/:id" element={<NewsDetail />} />
            </Route>

            <Route path="ayuda" >
              <Route index element={<Help />} />
            </Route>

            <Route path="susbcripciones" >
              <Route index element={<Subscriptions />} />
              <Route path="detalle/:id" element={<SubscriptionDetail />} />
              <Route path="contratar/:id" element={<BuySubscription />} />
              <Route path="compra_exitosa" element={<BuySuccess />} />
            </Route>

          </Route>
        </Route>
        <Route path="*" element={<Navigate replace to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterGlobal
