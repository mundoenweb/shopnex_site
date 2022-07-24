import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { connect } from "react-redux"
import Main from '../../components/templetes/Main/Main'
import useFetchGet from '../../hooks/useFetchGet'
import { handlerWorkDone } from './utils/handlerWorkDone'

const JobsTask = ({
  commissionPercentage,
  userId,
  referedBy
}) => {
  const navigate = useNavigate()
  const params = useParams()
  const [task] = useFetchGet(`/tasks/${params.id}`)

  const workDone = (event) => {
    event.preventDefault()
    console.log()
    handlerWorkDone(
      event, task[0], userId,
      referedBy, commissionPercentage,
      navigate
    )
  }

  return (
    <Main title='Detalle tarea'>
      {
        !task.length &&
        < div > Cargando datos de la tarea </div>
      }
      {
        task.length > 0 &&
        <div className='box_content content_padding'>
          <div>
            <h2>{task[0].name}</h2>
            <p>Costo: S./ {task[0].cost}</p>
            <br />
            <p className='p_pre'>Descripción: {task[0].description}</p>
            <br />
            <p>Contrato: {task[0].contract}</p>
          </div>
          <br />
          <Link
            to='/'
            className='button button_white'
            onClick={(e) => {
              e.preventDefault()
              alert('sitio en construcción')
            }}>
            contrato
          </Link>
          <br />
          <Link
            to='/'
            className='button'
            onClick={workDone}>
            realizar tarea
          </Link>
        </div>
      }
    </Main >
  )
}

const mapStateToProps = state => ({
  commissionPercentage: state.user.subscription.commission,
  userId: state.user.data.id,
  referedBy: state.user.data.code_referred_by
})

export default connect(mapStateToProps)(JobsTask)
