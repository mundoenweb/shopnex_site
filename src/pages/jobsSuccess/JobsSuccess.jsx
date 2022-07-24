import { Link, useParams } from "react-router-dom";
import Main from "../../components/templetes/Main/Main"

const JobsSuccess = () => {

  let params = useParams()

  return (
    <Main title='Tarea realizada'>
      <div className='box_content content_padding'>
        <h2>Felicidades! realizaste la tarea con exito.</h2>
        <span>Has ganado {params.profit} S./</span>
        <br /> <br />
        <Link to='/tareas' className="button">
          Realizar otra tarea
        </Link>
      </div>
    </Main>
  )
}

export default JobsSuccess
