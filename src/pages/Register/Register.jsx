// hooks
import { useForm } from "react-hook-form"
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { startSesion } from "../../redux/actionCreators";
//components
import FieldInputText from "../../components/common/forms/organisms/FieldInputText";
import Button from "../../components/common/forms/atoms/Button";
// utils
import { SubmitRegister } from "./utils/SubmitRegister";
import auth from "../../utils/auth";

const Register = ({
  user,
  startLogin
}) => {

  let [searchParams] = useSearchParams()

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const submit = (form) => {
    const referedBy = searchParams.get("referedBy")
    SubmitRegister(form, startLogin, navigate, referedBy)
  }

  const session = auth(user)
  if (session) return <Navigate to="/inicio" />

  return (
    <section>
      <div className="banner_blue_login"></div>
      <form className="form_session" onSubmit={handleSubmit(submit)}>
        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="text"
          name="email"
          title="Email"
          error={errors}
        />
        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="password"
          name="password"
          title="Contraseña"
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="password"
          name="password_two"
          title="Repetir Contraseña"
          error={errors}
        />
        <Button title='registrarme' />
        <Link to='/' className="button button_white">
        inisiar sesión
        </Link>
      </form>
    </section>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.data
})

const mapDispatchToProps = dispatch => ({
  startLogin(user) {
    dispatch(startSesion(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
