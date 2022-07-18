import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import FieldInputTextarea from "../../components/common/forms/organisms/FieldInputTextarea"
import Main from '../../components/templetes/Main/Main'
import { handleCreateNews } from "./utils/handleCreateNews"

const CreateNews = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const submit = (data, evt) => {
    handleCreateNews(data, evt.target, navigate)
  }

  return (
    <Main title='Crear noticia'>
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
          title="Nombre de la noticia"
          error={errors}
        />

        <FieldInputTextarea
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
          type="file"
          name="file"
          title="imagen de la noticia"
          error={errors}
        />


        <Button title='crear noticia' />
      </form>
    </Main>
  )
}

export default CreateNews
