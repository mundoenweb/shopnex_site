import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ButtonsOptions from '../../components/common/ButtonsOptions'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from '../../hooks/useFetchGet'

const UserDetail = ({
  user
}) => {

  const [banks] = useFetchGet(`/banks_users/all/${user.id}`)
  const uri = process.env.REACT_APP_URL_API

  return (
    <Main title='Detalle usuario'>
      <div className='box_content content_options'>
        <div>
          <h2>Datos del usuario:</h2>
          <p>Nombre: {user.name}</p>
          <p>email: {user.email}</p>
          <p>DNI: {user.number_credential}</p>
          <p>Tlf.: {user.phone}</p>
          <p>{!user.active && 'SUSPENDIDO'}</p>
          <p>
            {
              !user.certificate
                ? 'NO CERTIFICADO'
                : 'CERTIFICADO'
            }
          </p>
        </div>
        <ButtonsOptions>
          <Link to={`actualizar_datos`}>
            Actualizar datos
          </Link>
        </ButtonsOptions>
      </div>
      <div className='box_content content_options contentmargin_top'>
        <div>
          <h2>Credenciales:</h2>
          <p>Foto Perfil: {user.photo_perfil
            ? <a href={`${uri}${user.photo_perfil}`} target='new'>
              ver imagen
            </a>
            : 'pendiente'}
          </p>
          <p>Foto credencial frontal: {user.photo_credential_front
            ? <a href={`${uri}${user.photo_credential_front}`} target='new'>
              ver imagen
            </a>
            : 'pendiente'}
          </p>
          <p>Foto sosteniendo credencial: {user.photo_credential_revers
            ? <a href={`${uri}${user.photo_credential_revers}`} target='new'>
              ver imagen
            </a>
            : 'pendiente'}
          </p>
        </div>
        <ButtonsOptions>
          <Link to={`credenciales`}>
            Actualizar credenciales
          </Link>
        </ButtonsOptions>
      </div>

      {
        banks.length > 0 &&
        <div className='box_content contentmargin_top'>
          {
            banks.map(bank => (
              <div className='box_content content_options'>
                <div>
                  <h2>{bank.name}</h2>
                  <p>Número de cuenta: {bank.number_count}</p>
                  <p>Número CCI: {bank.number_count_cci}</p>
                </div>
                <ButtonsOptions>
                  <Link to={`actualizar_banco/${bank.id}`}>
                    Actualizar
                  </Link>
                </ButtonsOptions>
              </div>
            ))
          }
        </div>
      }
    </Main >
  )
}

const mapStateToProps = state => ({
  user: state.user.data
})

export default connect(mapStateToProps)(UserDetail)
