import useFetchGet from "../../hooks/useFetchGet"
import { Link, Navigate } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"
import { connect } from "react-redux"
import React, { createRef } from 'react'

const inputUrl = createRef()

const Referreds = ({
  certificate,
  code_referred
}) => {

  const [referreds] = useFetchGet(`users/referreds/${code_referred}`)

  if (!certificate) return <Navigate to='/usuario/pendiente' />

  function copyText(event, field) {
    event.preventDefault()

    field.select();
    field.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(field.value);

    alert('enlace copiado')
  }


  return (
    <Main title='Tareas'>
      {
        referreds.length === 0 &&
        <h2>cargando tareas</h2>
      }
        <Link to='/'
          onClick={e => copyText(e, inputUrl.current)}
          className="button"
        >
          Campartir enlace de referido
        </Link>
        <input
          type="text"
          ref={inputUrl}
          id="copyUrlWeb"
          value={`https://site.tuemprende.com/registro/referedBy=${code_referred}`}
          readOnly
          style={{ display: 'none' }} />
        <br />
      <div className="box_content">
        {
          referreds.map(referred => (
            <div key={referred.id} className="box_content content_padding content_border">
              <div>
                <h2>
                  {referred.name}
                </h2>
                <p className="title_item_list">
                  Tareas realizadas: {referred.task_complete || 0}
                </p>
                <p className="title_item_list">
                  Ganancia {referred.mount_total || 0} S./
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </Main>
  )
}

const mapStateToProps = state => ({
  certificate: state.user.data.certificate,
  code_referred: state.user.data.code_referred,
})

export default connect(mapStateToProps)(Referreds)
