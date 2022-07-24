import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import Main from '../../components/templetes/Main/Main'
import { startSesion } from "../../redux/actionCreators"
import { handleUpdateUserCredentials } from "./utils/handleUpdateUserCredentials"

const UpdateUserCredentials = ({
  id,
  startLogin
}) => {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = (data, evt) => {
    handleUpdateUserCredentials(data, evt.target, id, startLogin, navigate)
  }


  return (
    <Main title='Actualizar credenciales'>
      <form
        className="box_content content_padding content_w70"
        onSubmit={handleSubmit(submit)}
      >
        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="file"
          name="photo_perfil"
          title="Foto perfil"
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="file"
          name="photo_credential_front"
          title="Foto D.N.I. / C.E. / Pasaporte"
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="file"
          name="photo_credential_revers"
          title="Subir selfi sosteniendo credencial de idntidad"
          error={errors}
        />

        <Button title='actualizar credenciales' />
      </form>
    </Main>
  )
}

const mapStateToProps = state => ({
  id: state.user.data.id
})

const mapDispatchToProps = dispatch => ({
  startLogin(user) {
    dispatch(startSesion(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserCredentials)
