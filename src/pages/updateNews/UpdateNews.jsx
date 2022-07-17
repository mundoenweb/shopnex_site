import { useForm } from "react-hook-form"
import { useNavigate, useParams } from 'react-router-dom'
import Button from "../../components/common/forms/atoms/Button"
import FieldInputText from '../../components/common/forms/organisms/FieldInputText'
import Main from '../../components/templetes/Main/Main'
import useFetchGet from "../../hooks/useFetchGet"
import { handleUpdateNews } from "./utils/handleUpdateNews"

const UpdateNews = () => {
  const params = useParams()

  const [news] = useFetchGet(`/news/${params.id}`)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const submit = (data, evt) => {
    handleUpdateNews(data, evt.target, params.id, navigate)
  }

  return (
    <Main title='Actualizar noticia'>
      {
        news.length > 0 &&
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
            defaultValue={news[0].name}
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
            defaultValue={news[0].description}
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


          <Button title='actualizar noticia' />
        </form>
      }
    </Main>
  )
}

export default UpdateNews
