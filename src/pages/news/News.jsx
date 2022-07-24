import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"

const News = () => {

  const [News] = useFetchGet('/news')

  return (
    <Main title='Lista Noticias'>
      {
        News.length === 0 &&
        <h2>cargando noticias</h2>
      }
      <div className="box_content">
        {
          News.map(n => (
            <div key={n.id} className="item_list_general">
              <div>
                <h2 className="title_item_list">
                  {n.name}
                </h2>
                <p className="title_item_list box_descrip_list_news">
                  {n.description.split('\n')[0]}
                </p>
              </div>
              <ButtonsOptions>
                <Link to={`detalle/${n.id}`}>
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

export default News
