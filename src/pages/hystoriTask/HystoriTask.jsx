import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link, Navigate } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"
import { connect } from "react-redux"

const HystoriTask = ({
  certificate,
  idUser
}) => {

  const [movements] = useFetchGet(`/movements/user/tasks/${idUser}`)

  if (!certificate) return <Navigate to='/usuario/pendiente' />


  return (
    <Main title='Tareas'>
      {
        movements.length === 0 &&
        <h2>cargando tareas</h2>
      }
      <div className="box_content">
        {
          movements.map(movement => (
            <div key={movement.id} className="box_content content_options content_border">
              <div>
                <h2>
                  {movement.name}
                </h2>
                <p className="title_item_list">
                Ganancia de la tarea {movement.commission_task} S./
                </p>
              </div>
              <ButtonsOptions>
                <Link to={`/movement/task/${movement.id}`}>
                  Detalle
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
  certificate: state.user.data.certificate,
  idUser: state.user.data.id
})

export default connect(mapStateToProps)(HystoriTask)
