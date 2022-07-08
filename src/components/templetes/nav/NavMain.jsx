import { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"



const NavMain = ({
  name,
  email
}) => {

  const [links, setLink] = useState([
    {
      id: 1, name: 'Usuarios', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Lista usuarios', path: '/' },
        { id: 2, name: 'Aprovación de Perfiles', path: '/' }
      ]
    },
    {
      id: 2, name: 'Gestor de Tareas', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Lista de tareas', path: '/' },
        { id: 2, name: 'Crear tarea', path: '/' },
        { id: 3, name: 'Reporte', path: '/' }
      ]
    },
    {
      id: 3, name: 'Gestor de Noticias', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Lista de noticias', path: '/' },
        { id: 2, name: 'Crear noticia', path: '/' }
      ]
    },
    {
      id: 4, name: 'Configuraciones', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Tipos de usuarios', path: '/' }
      ]
    },
    {
      id: 5, name: 'Salir', path: '/', stlChilUl: '', childs: []
    }

  ])

  const liActive = (id) => {
    const li = links.map(li => {
      if (li.id === id && !li.stlChilUl) {
        const height = li.childs.length * 36
        return {
          ...li,
          stlChilUl: `${height}px`
        }
      }
      return {
        ...li,
        stlChilUl: ``
      }
    })

    setLink(li)
  }

  return (
    <div className="box_nav_main">
      <div className="box_name_user">
        <span>
          {email.split('@')[0]}
        </span>
      </div>

      <nav>
        <ul>
          {
            links.map(l => (
              <li key={l.id}
                onClick={() => liActive(l.id)}
                className={`li_main_nav`}
              >
                <span className="li_main_nav_a">
                  {l.name}
                </span>
                <ul style={{ height: l.stlChilUl }}>
                  {
                    l.childs.map(childLi => (
                      <li key={childLi.id} className="li_second_nav">
                        <Link
                          className="li_child_nav_a"
                          to={childLi.path}
                        >
                          {childLi.name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.user.name,
  email: state.user.email
})


export default connect(mapStateToProps)(NavMain)
