import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from '../../hooks/useFetchGet'

const NewsDetail = () => {
  const params = useParams()
  const [news] = useFetchGet(`/news/${params.id}`)


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
            <p>Descripción: {news[0].description}</p>
            <br />
            <p>Imagen: {news[0].image}</p>
          </div>
        </div>
      }
    </Main >
  )
}

export default NewsDetail
