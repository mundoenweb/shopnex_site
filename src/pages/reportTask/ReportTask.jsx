import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"

const ReportTask = () => {

  const [movements] = useFetchGet('/movements/tasks')

  return (
    <Main title='Reporte tareas realizadas'>
      {
        movements.length === 0 &&
        <h2>cargando reporte</h2>
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
                    {movement.task}
                  </p>
                </div>
                <ButtonsOptions>
                  <Link to={`/movement/task/${movement.id}`}>
                    Detalle
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
