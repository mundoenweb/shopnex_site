import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import ProfileApproval from "../pages/ArofileApproval/ProfileApproval"
import Login from "../pages/Login/Login"
import Private from "../pages/Private/Private"
import Tasks from "../pages/tasks/Tasks"
import UserDetail from "../pages/UserDetail.jsx/UserDetail"
import Users from "../pages/users/Users"
import CreateTask from "../pages/createTask/CreateTask"
import UpdateTask from "../pages/updateTask/UpdateTask"
import TaskDetail from "../pages/taskDetail/TaskDetail"
// import ReportTask from "../pages/reportTask/ReportTask"
import News from "../pages/news/News"
import NewsDetail from "../pages/newDetail/NewsDetail"
import CreateNews from "../pages/createNews/CreateNews"
import UpdateNews from "../pages/updateNews/UpdateNews"
import ReportTask from "../pages/reportTask/ReportTask"
import MovementTaskDetail from "../pages/movementTaskDetail.jsx/movementTaskDetail"
import Subscriptions from "../pages/subscriptions/Subscriptions"
import SubscriptionDetail from "../pages/subscriptionDetail/SubscriptionDetail"
import CreateSubscripcion from "../pages/createSubscripcion/CreateSubscripcion"
import UpdateSubscripcion from "../pages/updateSubscripcion/UpdateSubscripcion"

const RouterGlobal = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Private />} >
          <Route element={<App />}>

            <Route path="usuarios" >
              <Route index element={<Users />} />
              <Route path="detalle/:id" element={<UserDetail />} />
              <Route path="aprovaciones" element={<ProfileApproval />} />
            </Route>

            <Route path="tareas" >
              <Route index element={<Tasks />} />
              <Route path="crear" element={<CreateTask />} />
              <Route path="actualizar/:id" element={<UpdateTask />} />
              <Route path="detalle/:id" element={<TaskDetail />} />
              <Route path="realizadas" element={<ReportTask />} />
            </Route>

            <Route path="movement/task/:id" element={<MovementTaskDetail />} />

            <Route path="noticias" >
              <Route index element={<News />} />
              <Route path="crear" element={<CreateNews />} />
              <Route path="actualizar/:id" element={<UpdateNews />} />
              <Route path="detalle/:id" element={<NewsDetail />} />
            </Route>

            <Route path="suscriptions" >
              <Route index element={<Subscriptions />} />
              <Route path="crear" element={<CreateSubscripcion />} />
              <Route path="actualizar/:id" element={<UpdateSubscripcion />} />
              <Route path="detalle/:id" element={<SubscriptionDetail />} />
            </Route>

          </Route>
        </Route>
        <Route path="*" element={<h1>pagina no existe</h1>} />
        {/* <Route path="*" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouterGlobal
