import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"

const ProfileApproval = () => {

  const [users] = useFetchGet('/users/approval')

  return (
    <Main title='Aprovación de  perfiles'>
      {
        users.length === 0 &&
        <h2>sin usuarios por verificar</h2>
      }
      <div className="box_content">
        {
          users.map(user => (
            <div key={user.id} className="item_list_general">
              <div>
                <p className="title_item_list">
                  {user.name || user.email.split('@')[0]}
                </p>
                <p className="title_descrip_list">
                  Credenciales listas para verificar
                </p>
              </div>
              <ButtonsOptions>
                <Link to={`/usuarios/detalle/${user.id}`}>
                  Detalle usuario
                </Link>
              </ButtonsOptions>
            </div>
          ))}
      </div>
    </Main>
  )
}

export default ProfileApproval
