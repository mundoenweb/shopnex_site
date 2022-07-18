import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from '../../hooks/useFetchGet'

const NewsDetail = () => {
  const params = useParams()
  const [news] = useFetchGet(`/news/${params.id}`)
  const uri = process.env.REACT_APP_URL_API


  return (
    <Main title='Detalle noticia'>
      {
        !news.length &&
        < div > Cargando detalles de la noticia </div>
      }
      {
        news.length > 0 &&
        <div className='box_content content_options'>
          <div>
            <h2>{news[0].name}</h2>
            <br />
            <p className='p_pre'>Descripción: {news[0].description}</p>
            <br />
            {
              news[0].image !== '/'  &&
              <img src={`${uri}${news[0].image}`} alt={news[0].name} className='image_detail_new' />
            }
          </div>
        </div>
      }
    </Main >
  )
}

export default NewsDetail
