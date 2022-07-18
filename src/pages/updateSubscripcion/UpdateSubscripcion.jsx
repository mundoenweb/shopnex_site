import { useForm } from "react-hook-form"
import { useNavigate, useParams } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import FieldInputTextarea from "../../components/common/forms/organisms/FieldInputTextarea"
import Main from '../../components/templetes/Main/Main'
import useFetchGet from "../../hooks/useFetchGet"
import { handleUpdateSubscription } from "./utils/handleUpdateSubscription"

const UpdateSubscripcion = () => {

  const params = useParams()
  const navigate = useNavigate()

  const [subscription] = useFetchGet(`/subscriptions/${params.id}`)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = (data) => {
    handleUpdateSubscription(data, params.id, navigate)
  }

  console.log(subscription)

  return (
    <Main title='Actualizar suscripción'>
      {
        subscription.length > 0 &&
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
            defaultValue={subscription[0].name}
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
            defaultValue={subscription[0].cost}
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
            defaultValue={subscription[0].commission}
            error={errors}
          />

          <FieldInputTextarea
            register={register}
            validate={{
              required: true
            }}
            name="description"
            title="descripción"
            defaultValue={subscription[0].description}
            error={errors}
          />

          <Button title='actualizar suscripción' />
        </form>
      }
    </Main>
  )
}

export default UpdateSubscripcion
