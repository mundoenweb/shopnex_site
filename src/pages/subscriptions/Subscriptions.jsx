import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"
import { connect } from "react-redux"

const Subscriptions = ({
  idSubsCription
}) => {

  const [subscriptions] = useFetchGet('/subscriptions')

  return (
    <Main title='Sube a premiun'>
      <div className="box_content">
        {
          subscriptions.map(subscription => (
            <div key={subscription.id} className="item_list_general">
              <div>
                <p className="title_item_list">{subscription.name} {
                idSubsCription ===  subscription.id && '- Subscripción Actual'
                }</p>
                <p className="title_descrip_list">Costo: S/ {subscription.cost}</p>
                <p className="title_descrip_list">Comisíón: {subscription.commission}%</p>
              </div>
              {
                subscription.id !== 1 &&  
                <ButtonsOptions>
                  <Link to={`detalle/${subscription.id}`}>Detalle</Link>
                  <Link to={`contratar/${subscription.id}`}>Contratar</Link>
                </ButtonsOptions>
              }
            </div>
          ))
        }
      </div>
    </Main>
  )
}

const mapStateToProps = state => ({
  idSubsCription: state.user.subscription.id
})

export default connect(mapStateToProps)(Subscriptions)
