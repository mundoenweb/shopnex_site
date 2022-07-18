import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from '../../hooks/useFetchGet'

const MovementTaskDetail = () => {
  const params = useParams()

  const [movement] = useFetchGet(`/movements/${params.id}`)

  return (
    <Main title='Detalle usuario'>
      {
        !movement.length &&
        <div> Cargando datos del movimiento </div>
      }
      {
        movement.length > 0 &&
        <>
          <div className='box_content content_padding'>
            <div>
              <h2>Datos del usuario:</h2>
              <p>Nombre: {movement[0].nameUser}</p>
            </div>
          </div>
          <div className='box_content content_padding contentmargin_top'>
            <h2>Detalle de la tarea realizada:</h2>
            <p>Nombre: {movement[0].taskName}</p>
            <p>Fecha: {movement[0].date.split('T')[0]}</p>
            <p>Comisión: {movement[0].nameUser}</p>
          </div>
        </>
      }
    </Main >
  )
}

export default MovementTaskDetail
