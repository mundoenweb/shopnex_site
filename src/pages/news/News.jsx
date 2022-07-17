import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"
// import { handleDeleteTask } from "./utils/handleDeleteTask"

const News = () => {

  const [News] = useFetchGet('/news')

  // const deleteTask = (id, evt) => {
  //   handleDeleteTask(evt, id, News, setData)
  // }

  return (
    <Main title='Lista Noticias'>
      {
        News.length === 0 &&
        <h2>cargando noticias</h2>
      }
      <div className="box_content">
        {
          News.map(n => {
            if (n.id === 1) return <></>
            return (
              <div key={n.id} className="item_list_general">
                <div>
                  <h2 className="title_item_list">
                    {n.name}
                  </h2>
                    <p className="title_item_list box_descrip_list_news">
                      {n.description}
                    </p>
                </div>
                <ButtonsOptions>
                  <Link to={`detalle/${n.id}`}>
                    Detalle
                  </Link>
                  <Link to={`actualizar/${n.id}`}>
                    Actualizar
                  </Link>
                </ButtonsOptions>
              </div>
            )
          })}
      </div>
    </Main>
  )
}

export default News
