import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import FieldSelectNew from '../../components/common/forms/organisms/FieldSelectNew'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from "../../hooks/useFetchGet"
import { handleCreateBank } from "./utils/handleCreateBank"

const CreateBank = ({
  idUser
}) => {

  const [banks] = useFetchGet('/banks')
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const submit = (data) => {
    data.users_id = idUser
    handleCreateBank(data, navigate)
  }

  return (
    <Main title='Crear cuenta bancaria'>
      <form
        className="box_content content_padding content_w70"
        onSubmit={handleSubmit(submit)}
      >
        <FieldSelectNew
          register={register}
          validate={{
            required: true
          }}
          type="text"
          name="banks_id"
          title="seleccione un banco"
          options={banks}
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="text"
          name="number_count"
          title="Número de cuenta"
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="number"
          name="number_count_cci"
          title="Numero de cuenta interbancarios (CCI)"
          error={errors}
        />

        <Button title='crear cuenta bancaria' />
      </form>
    </Main>
  )
}

const mapStateToProps = state => ({
  idUser: state.user.data.id
})

export default connect(mapStateToProps)(CreateBank)
