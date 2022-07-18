import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ButtonsOptions from '../../components/common/ButtonsOptions'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from '../../hooks/useFetchGet'
import { handlerActiveTask } from './utils/handlerActiveTask'

const TaskDetail = () => {
  const params = useParams()

  const [task, , { setData }] = useFetchGet(`/tasks/${params.id}`)

  const active = (evt) => {
    handlerActiveTask(evt, task[0], setData)
  }

  return (
    <Main title='Detalle tarea'>
      {
        !task.length &&
        < div > Cargando datos de la tarea </div>
      }
      {
        task.length > 0 &&
        <div className='box_content content_options'>
          <div>
            <h2>Datos del la tarea:</h2>
            <p>Nombre: {task[0].name}</p>
            <p>Estado: {task[0].active ? 'activa' : 'desactivada'}</p>
            <p>Costo: S./ {task[0].cost}</p>
            <br />
            <p className='p_pre'>Descripción: {task[0].description}</p>
            <br />
            <p>Contrato: {task[0].contract}</p>
          </div>
          <ButtonsOptions>
            {
              task[0].active
                ?
                <Link to={`/`} onClick={active}>
                  Desactivar
                </Link>
                :
                <Link to={`/`} onClick={active}>
                  Activar
                </Link>
            }
          </ButtonsOptions>
        </div>
      }
    </Main >
  )
}

export default TaskDetail
