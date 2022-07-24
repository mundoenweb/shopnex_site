import { useForm } from "react-hook-form"
import Button from "../../components/common/forms/atoms/Button"
import FieldInputTextarea from "../../components/common/forms/organisms/FieldInputTextarea"
import Main from '../../components/templetes/Main/Main'

const Help = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
    reset
    } = useForm()

  const submit = () => {
    alert('su consulta fue enviada correctamente\npronto nos pondremos en contacto')
    reset()
  }

  return (
    <Main title='Obtener ayuda'>
      <form
        className="box_content content_padding content_w70"
        onSubmit={handleSubmit(submit)}
      >

        <FieldInputTextarea
          register={register}
          validate={{
            required: true
          }}
          name="description"
          title="Escribanos su consulta"
          error={errors}
        />

        <Button title='e nviar consulta' />
      </form>
    </Main>
  )
}

export default Help
