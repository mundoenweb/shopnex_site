import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Main from "../../components/templetes/Main/Main"

const BuySuccess = ({
  name
}) => {

  return (
    <Main title='Tarea realizada'>
      <div className='box_content content_padding'>
        <h2>Felicidades</h2>
        <span>Ahora eres usuario {name}</span>
        <br /> <br />
        <Link to='/tareas' className="button">
          Realizar tareas
        </Link>
      </div>
    </Main>
  )
}

const mapStateToProps = state => ({
  name: state.user.subscription.name
})

export default connect(mapStateToProps)(BuySuccess)
