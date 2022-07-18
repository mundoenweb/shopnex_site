import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import FieldInputTextarea from "../../components/common/forms/organisms/FieldInputTextarea"
import Main from '../../components/templetes/Main/Main'
import { handleCreateSubscription } from "./utils/handleCreateSubscription"

const CreateSubscripcion = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const submit = (data) => {
    handleCreateSubscription(data, navigate)
  }

  return (
    <Main title='Crear nueva suscripción'>
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
          title="Nombre de la suscripción"
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="number"
          name="cost"
          title="costo"
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="number"
          name="commission"
          title="comisión del usuario %"
          error={errors}
        />


        <FieldInputTextarea
          register={register}
          validate={{
            required: true
          }}
          name="description"
          title="descripción"
          error={errors}
        />

        <Button title='crear suscripción' />
      </form>
    </Main>
  )
}

export default CreateSubscripcion
