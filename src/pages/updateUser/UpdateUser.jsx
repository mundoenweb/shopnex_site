import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import Main from '../../components/templetes/Main/Main'
import { startSesion } from "../../redux/actionCreators"
import { handleUpdateUser } from "./utils/handleUpdateUser"

const UpdateUser = ({
  id,
  name,
  phone,
  number_credential,
  startLogin
}) => {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = (data) => {
    handleUpdateUser(data, id, startLogin, navigate)
  }


  return (
    <Main title='Actualizar perfil'>
      <form
        className="box_content content_padding content_w70"
        onSubmit={handleSubmit(submit)}
      >
        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="text"
          name="name"
          title="Nombre completo"
          defaultValue={name}
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="number"
          name="number_credential"
          title="D.N.I / C.E. / Passaporte"
          defaultValue={number_credential}
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true,
            minLength: 9
          }}
          minLengt='9'
          type="number"
          name="phone"
          title="Teléfono"
          defaultValue={phone}
          error={errors}
        />
        <Button title='actualizar suscripción' />
      </form>
    </Main>
  )
}

const mapStateToProps = state => ({
  id: state.user.data.id,
  name: state.user.data.name,
  number_credential: state.user.data.number_credential,
  phone: state.user.data.phone
})

const mapDispatchToProps = dispatch => ({
  startLogin(user) {
    dispatch(startSesion(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser)
