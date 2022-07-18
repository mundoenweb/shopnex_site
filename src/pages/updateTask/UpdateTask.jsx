import { useForm } from "react-hook-form"
import { useNavigate, useParams } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import FieldInputTextarea from "../../components/common/forms/organisms/FieldInputTextarea"
import FieldSelectNew from '../../components/common/forms/organisms/FieldSelectNew'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from "../../hooks/useFetchGet"
import { handleUpdateTask } from "./utils/handleUpdateTask"

const UpdateTask = () => {

  const params = useParams()

  const [task] = useFetchGet(`/tasks/${params.id}`)
  const [subscriptions] = useFetchGet('/subscriptions')

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const submit = (data) => {
    handleUpdateTask(data, task[0].id, navigate)
  }

  return (
    <Main title='Actualizar tarea'>
      {
        task.length > 0 &&
        < form
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
            defaultValue={task[0].name}
            title="Nombre de la tarea"
            error={errors}
          />

          <FieldInputTextarea
            register={register}
            validate={{
              required: true
            }}
            name="description"
            title="descripcion"
            defaultValue={task[0].description}
            error={errors}
          />

          <FieldInputTextarea
            register={register}
            validate={{
              required: true
            }}
            name="contract"
            title="descripcion del contrato"
            defaultValue={task[0].contract}
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
            defaultValue={task[0].cost}
            error={errors}
          />

          <FieldSelectNew
            register={register}
            validate={{
              required: true
            }}
            name="subscriptions_id"
            title="seleccione un tipo de suscripción"
            options={subscriptions}
            defaultValue={`${task[0].subscriptions_id}`}
            error={errors}
          />

          <Button title='actualizar tarea' />
        </form>
      }
    </Main >
  )
}

export default UpdateTask
