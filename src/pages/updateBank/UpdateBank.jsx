import { useForm } from "react-hook-form"
import { useNavigate, useParams } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import FieldSelectNew from '../../components/common/forms/organisms/FieldSelectNew'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from "../../hooks/useFetchGet"
import { handleUpdateBank } from "./utils/handleUpdateBank"

const UpdateBank = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [banks] = useFetchGet('/banks')
  const [bankCurrent] = useFetchGet(`/banks_users/${params.id}`)


  const submit = (data) => {
    handleUpdateBank(data, params.id, navigate)
  }

  return (
    <Main title='Actualizar banco'>
      {
        banks.length > 0
          ? bankCurrent.length > 0 &&
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
              defaultValue={bankCurrent[0].banks_id}
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
              defaultValue={bankCurrent[0].number_count}
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
              defaultValue={bankCurrent[0].number_count_cci}
              error={errors}
            />

            <Button title='actualizar cuenta' />
          </form>
          : <></>
      }

    </Main>
  )
}


export default UpdateBank
