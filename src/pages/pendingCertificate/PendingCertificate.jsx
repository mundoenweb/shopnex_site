import { connect } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import Main from "../../components/templetes/Main/Main"

const PendingCertificate = ({
  certificate
}) => {
  if (!certificate) return (
        <Main title='Perfin Incompleto'>
            <div className="box_content content_padding">
                <h2>Debe completar sus datos de porfil para certificarce como usuario reaal y poder acceder a todas las funcionalidades del sitio web</h2>
                <br />
                <Link
                    to='../actualizar_datos'
                    className='button'
                >
                    actualizar datos
                </Link>
            </div>
        </Main>
    )
    return <Navigate to='/inicio' />
}

const mapStateToProps = state => ({
  certificate: state.user.data.certificate
})

export default connect(mapStateToProps)(PendingCertificate)
