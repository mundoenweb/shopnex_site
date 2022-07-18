import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ButtonsOptions from '../../components/common/ButtonsOptions'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from '../../hooks/useFetchGet'
import { handlerActive } from './utils/handlerActive'
import { handlerCertificate } from './utils/handlerCertificate'

const UserDetail = () => {
  const params = useParams()

  const [user, , { setData }] = useFetchGet(`/users/${params.id}`)

  const certificate = (evt) => {
    handlerCertificate(evt, user[0], setData)
  }
  const active = (evt) => {
    handlerActive(evt, user[0], setData)
  }

  const uri = process.env.REACT_APP_URL_API

  return (
    <Main title='Detalle usuario'>
      {
        !user.length &&
        <div> Cargando datos del usuario </div>
      }
      {
        user.length > 0 &&
        <>
          <div className='box_content content_options'>
            <div>
              <h2>Datos del usuario:</h2>
              <p>Nombre: {user[0].name}</p>
              <p>email: {user[0].email}</p>
              <p>DNI: {user[0].number_credential}</p>
              <p>Tlf.: {user[0].phone}</p>
              <p>{!user[0].active && 'SUSPENDIDO'}</p>
              <p>
                {
                  !user[0].certificate
                    ? 'NO CERTIFICADO'
                    : 'CERTIFICADO'
                }
              </p>
            </div>
            <ButtonsOptions>
              {
                user[0].active
                  ?
                  <Link to={`/`} onClick={active}>
                    Suspender
                  </Link>
                  :
                  <Link to={`/`} onClick={active}>
                    Quitar Suspensión
                  </Link>
              }
            </ButtonsOptions>
          </div>
          <div className='box_content content_options contentmargin_top'>
            <div>
              <h2>Credenciales:</h2>
              <p>Foto Perfil: {user[0].photo_perfil
                ? <a href={`${uri}${user[0].photo_perfil}`} target='new'>
                  ver imagen
                </a>
                : 'pendiente'}
              </p>
              <p>Foto credencial frontal: {user[0].photo_credential_front
                ? <a href={`${uri}${user[0].photo_credential_front}`} target='new'>
                  ver imagen
                </a>
                : 'pendiente'}
              </p>
              <p>Foto sosteniendo credencial: {user[0].photo_credential_revers
                ? <a href={`${uri}${user[0].photo_credential_revers}`} target='new'>
                  ver imagen
                </a>
                : 'pendiente'}
              </p>
            </div>
            <ButtonsOptions>
              {
                !user[0].certificate
                  ?
                  <Link to={`/`} onClick={certificate}>
                    Certificar
                  </Link>
                  :
                  <Link to={`/`} onClick={certificate}>
                    Quitar certificado
                  </Link>
              }
            </ButtonsOptions>
          </div>
        </>
      }
    </Main >
  )
}

export default UserDetail
