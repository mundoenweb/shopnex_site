import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link, Navigate } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"
import { connect } from "react-redux"

const Tasks = ({
  certificate
}) => {

  const [tasks] = useFetchGet('/tasks')

  if (!certificate) return <Navigate to='/usuario/pendiente' />


  return (
    <Main title='Tareas'>
      {
        tasks.length === 0 &&
        <h2>cargando tareas</h2>
      }
      <div className="box_content">
        {
          tasks.map(task => (
            <div key={task.id} className="box_content content_options content_border">
              <div>
                <h2>
                  {task.name}
                </h2>
                <p className="title_item_list">
                  Costo: {task.cost} S/.
                </p>
              </div>
              <ButtonsOptions>
                <Link to={`${task.id}`}>
                  Realizar tarea
                </Link>
              </ButtonsOptions>
            </div>
          ))
        }
      </div>
    </Main>
  )
}

const mapStateToProps = state => ({
  certificate: state.user.data.certificate
})

export default connect(mapStateToProps)(Tasks)
