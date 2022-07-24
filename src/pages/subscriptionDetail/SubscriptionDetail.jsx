import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from '../../hooks/useFetchGet'

const SubscriptionDetail = () => {
  const params = useParams()
  const [subscription] = useFetchGet(`/subscriptions/${params.id}`)
  // const uri = process.env.REACT_APP_URL_API


  return (
    <Main title='Detalle suscripción'>
      {
        !subscription.length &&
        < div > Cargando detalles de la suscripción </div>
      }
      {
        subscription.length > 0 &&
        <>
          <div className='box_content content_options'>
            <div>
              <h2>{subscription[0].name}</h2>
              <br />
              <p>Costo: S/. {subscription[0].cost}</p>
              <p>Comisión: {subscription[0].commission}%</p>
              <p className='p_pre'>Descripción: {subscription[0].description}</p>
            </div>
          </div>
          <br />
          <Link
            to={`../contratar/${subscription[0].id}`}
            className='button'
          >
            Subir a {subscription[0].name}
          </Link>
        </>
      }
    </Main >
  )
}

export default SubscriptionDetail
