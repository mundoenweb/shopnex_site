import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import FieldSelectNew from '../../components/common/forms/organisms/FieldSelectNew'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from "../../hooks/useFetchGet"
import { handleCreateTask } from "./utils/handleCreateTask"

const CreateTask = () => {

  const [subscriptions] = useFetchGet('/subscriptions')
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const submit = (data) => {
    handleCreateTask(data, navigate)
  }

  return (
    <Main title='Crear tarea nueva'>
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
          title="Nombre de la tarea"
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="texttarea"
          name="description"
          title="descripcion"
          error={errors}
        />

        <FieldInputText
          register={register}
          validate={{
            required: true
          }}
          type="text"
          name="contract"
          title="descripcion del contrato"
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

        <FieldSelectNew
          register={register}
          validate={{
            required: true
          }}
          type="text"
          name="subscriptions_id"
          title="seleccione un tipo de suscripción"
          options={subscriptions}
          error={errors}
        />

        <Button title='crear tarea' />
      </form>
    </Main>
  )
}

export default CreateTask
