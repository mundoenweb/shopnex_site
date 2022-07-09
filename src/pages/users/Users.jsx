import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Main from "../../components/templetes/Main/Main"

const Users = () => {

  const [users] = useFetchGet('/users')

  return (
    <Main title='Lista usuarios'>
        <div className="box_list_generel">
          {
            users.map(user => (
              <div key={user.id} className="item_list_general">
                <div>
                  <p className="title_item_list">{user.name || user.email.split('@')[0]}</p>
                  <p className="title_descrip_list">{user.email}</p>
                </div>
                <ButtonsOptions>
                  <Link to="/">Detalle usuario</Link>
                </ButtonsOptions>
              </div>
            ))
          }
        </div>
    </Main>
  )
}

export default Users
