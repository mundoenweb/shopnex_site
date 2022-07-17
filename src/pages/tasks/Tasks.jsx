import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"
import { handleDeleteTask } from "./utils/handleDeleteTask"

const Tasks = () => {

  const [tasks, , { setData }] = useFetchGet('/tasks')

  const deleteTask = (id, evt) => {
    handleDeleteTask(evt, id, tasks, setData)
  }

  return (
    <Main title='Tareas'>
      {
        tasks.length === 0 &&
        <h2>cargando tareas</h2>
      }
      <div className="box_content">
        {
          tasks.map(task => {
            if (task.id === 1) return <></>
            return (
              <div key={task.id} className="item_list_general">
                <div>
                  <p className="title_item_list">
                    {task.name}
                  </p>
                  <p className="title_item_list">
                    {task.description}
                  </p>
                </div>
                <ButtonsOptions>
                  <Link to={`detalle/${task.id}`}>
                    Detalle
                  </Link>
                  <Link to={`actualizar/${task.id}`}>
                    Actualizar
                  </Link>
                  <Link onClick={(e) => deleteTask(task.id, e)}
                    to={`/`}
                  >
                    Eliminar
                  </Link>
                </ButtonsOptions>
              </div>
            )
          })}
      </div>
    </Main>
  )
}

export default Tasks
