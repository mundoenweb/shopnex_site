import { connect } from "react-redux"
import { Link } from "react-router-dom"
import ButtonsOptions from "../../components/common/ButtonsOptions"
import Main from "../../components/templetes/Main/Main"
import useFetchGet from "../../hooks/useFetchGet"

const Inicio = ({
  idUser
}) => {

  const [profits] = useFetchGet(`/profits/${idUser}`)
  const [tasks] = useFetchGet(`/tasks`)
  const [news] = useFetchGet(`/news`)

  return (
    <Main title='inicio'>
      <div className='box_content_grid_2'>
        <div>
          <div className='box_content content_padding'>
            <p>Dinero disponible</p>
            <h2>S/. {profits[0]?.mount_total}</h2>
            <br />
            <Link
              to='/tareas'
              className="button button_white"
              onClick={(e) => {
                e.preventDefault()
                alert('sitio de prueba,\npronto disponible esta función')
              }}
            >
              Retirar Dinero
            </Link>
          </div>
          <div className='box_content content_padding contentmargin_top'>
            <p>Ganancias por referidos</p>
            <h2>S/. {profits[0]?.mount_referred}</h2>
          </div>
          <div className='box_content content_padding contentmargin_top'>
            <p>Tareas disponibles para realizar </p>
            <h2>{tasks.length}</h2>
            <br />
            <Link to='/tareas' className='button'>
              Realizar tareas
            </Link>
          </div>
        </div>
        {
          news.length > 0 &&
          <div className="box_content content_options content_padding">
            <div>
              <h2 className="title_item_list">
                {news[0].name}
              </h2>
              <p className="title_item_list box_descrip_list_news">
                {news[0].description.split('\n')[0]}
              </p>
            </div>
            <ButtonsOptions>
              <Link to={`/noticias/detalle/${news[0].id}`}>
                Detalle
              </Link>
            </ButtonsOptions>
          </div>
        }
      </div>
    </Main>
  )
}

const mapStateToProps = state => ({
  idUser: state.user.data.id
})

export default connect(mapStateToProps)(Inicio)
