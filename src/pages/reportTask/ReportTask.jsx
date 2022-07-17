import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"
import { handleDeleteTask } from "./utils/handleDeleteTask"

const ReportTask = () => {

  const [movements, , { setData }] = useFetchGet('/movements')

  const deleteTask = (id, evt) => {
    handleDeleteTask(evt, id, movements, setData)
  }

  return (
    <Main title='Tareas'>
      {
        movements.length === 0 &&
        <h2>cargando tareas</h2>
      }
      <div className="box_content">
        {
          movements.map(movement => {
            if (movement.id === 1) return <></>
            return (
              <div key={movement.id} className="item_list_general">
                <div>
                  <p className="title_item_list">
                    {movement.name}
                  </p>
                  <p className="title_item_list">
                    {movement.description}
                  </p>
                </div>
                <ButtonsOptions>
                  <Link to={`detalle/${movement.id}`}>
                    Detalle
                  </Link>
                  <Link to={`actualizar/${movement.id}`}>
                    Actualizar
                  </Link>
                  <Link onClick={(e) => deleteTask(movement.id, e)}
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

export default ReportTask
