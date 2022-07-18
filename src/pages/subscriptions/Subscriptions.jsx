import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"

const Subscriptions = () => {

  const [subscriptions] = useFetchGet('/subscriptions')

  return (
    <Main title='Tipos de suscripciones'>
        <div className="box_content">
          {
            subscriptions.map(subscription => (
              <div key={subscription.id} className="item_list_general">
                <div>
                  <p className="title_item_list">{subscription.name}</p>
                  <p className="title_descrip_list">Costo: S/ {subscription.cost}</p>
                  <p className="title_descrip_list">Comisíón: {subscription.commission}%</p>
                </div>
                <ButtonsOptions>
                  <Link to={`detalle/${subscription.id}`}>Detalle</Link>
                  <Link to={`actualizar/${subscription.id}`}>Actualizar</Link>
                </ButtonsOptions>
              </div>
            ))
          }
        </div>
    </Main>
  )
}

export default Subscriptions
