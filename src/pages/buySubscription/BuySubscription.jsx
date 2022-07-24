import { useForm } from "react-hook-form"
import { connect } from "react-redux"
import { useNavigate, useParams } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from "../../hooks/useFetchGet"
import { handleBuySubscription } from "./utils/handleBuySubscription"

const BuySubscription = ({
  idUser
}) => {

  const navigate = useNavigate()
  const params = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [subscription] = useFetchGet(`/subscriptions/${params.id}`)

  const submit = () => {
    handleBuySubscription({
      users_id: idUser,
      mount: subscription[0].cost,
      subscriptions_id: subscription[0].id,
      status: "aprovado",
      order_gateway: "abc123456",
      reference_pay: "abc123456789"
    }, navigate)
  }

  return (
    <Main title={subscription[0]?.name || 'Realizar Pago'}>
      <div className='box_content content_padding content_w70'>
        <h2>Suscrih2ción: {subscription[0]?.name}</h2>
        <p>Costo {subscription[0]?.cost}</p>
        <p>Comisión {subscription[0]?.commisssion}</p>
      </div>
      <form
        className="box_content content_padding content_w70 contentmargin_top"
        onSubmit={handleSubmit(submit)}
      >
        <FieldInputText
          register={register}
          validate={{
            required: true,
            minLengt: '16'
          }}
          minLengt='16'
          type="number"
          name="numberCard"
          title="Numero de la tarjeta"
          error={errors}
        />

        <label htmlFor={'date'}>{'fecha de vencimiento'}
          <input
            type='date'
            name={'date'}
            id={'date'}
            required
          />
        </label>

        <FieldInputText
          register={register}
          validate={{
            required: true,
            minLengt: 3,
            maxLengt: 3
          }}
          minLengt='3'
          type="number"
          name="date"
          title="CCV"
          error={errors}
        />

        <Button title='Realizar Pago' />
      </form>
    </Main>
  )
}

const mapStateToProps = state => ({
  idUser: state.user.data.id
})

export default connect(mapStateToProps)(BuySubscription)
