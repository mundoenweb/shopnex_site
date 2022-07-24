// hooks
import { useForm } from "react-hook-form"
import { Link, Navigate, useNavigate } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { startSesion } from "../../redux/actionCreators";
//components
import FieldInputText from "../../components/common/forms/organisms/FieldInputText";
import Button from "../../components/common/forms/atoms/Button";
// utils
import { SubmitSingIn } from "./utils/SubmitSingIn";
import auth from "../../utils/auth";

const Login = ({
  user,
  startLogin
}) => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const submit = (form) => {
    SubmitSingIn(form, startLogin, navigate)
  }

  const session = auth(user)
  if (session) return <Navigate to="inicio" />

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
        <Button title='inisiar sesión' />
        <Link to='/registro' className="button button_white">
          registrarme gratis
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
