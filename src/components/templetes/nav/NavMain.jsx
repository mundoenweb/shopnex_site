import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {
  openMenuMovil,
  closeSesion
} from '../../../redux/actionCreators'



const NavMain = ({
  name,
  email,
  openNavMovil,
  openNavMain,
  endSession
}) => {

  const [links, setLink] = useState([
    {
      id: 1, name: 'Usuarios', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Lista usuarios', path: '/usuarios' },
        { id: 2, name: 'Aprovación de Perfiles', path: '/usuarios/aprovaciones' }
      ]
    },
    {
      id: 2, name: 'Gestor de Tareas', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Lista de tareas', path: '/tareas' },
        { id: 2, name: 'Crear tarea', path: '/tareas/crear' },
        { id: 3, name: 'Reporte', path: '/tareas/realizadas' }
      ]
    },
    {
      id: 3, name: 'Gestor de Noticias', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Lista de noticias', path: '/noticias' },
        { id: 2, name: 'Crear noticia', path: '/noticias/crear' }
      ]
    },
    {
      id: 4, name: 'Configuraciones', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Tipos de usuarios', path: '/suscriptions' }
      ]
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

  const closeMenu = () => {
    openNavMain('')
  }

  useEffect(() => {
    if (openNavMovil) {
      window.document.body.style.overflowY = 'hidden'
    }
    else {
      window.document.body.style.overflowY = ''
    }

  }, [openNavMovil])




  return (
    <>
      {
        openNavMovil &&
        <div className='box_black_nav_movil' onClick={closeMenu} />
      }
      <div className={`box_nav_main ${openNavMovil}`}>
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
                        <li key={childLi.id}>
                          <Link
                            className="li_child_nav_a"
                            to={childLi.path}
                            onClick={closeMenu}
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
            <li className={`li_main_nav`}>
              <Link
                to={'/'}
                onClick={endSession}
                className="li_main_nav_a"
              >
                Salir
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  name: state.user.name,
  email: state.user.email,
  openNavMovil: state.styles?.nav?.openNav || ""
})

const mapDispatchToProps = dispatch => ({
  openNavMain(style) {
    dispatch(openMenuMovil(style))
  },
  endSession() {
    dispatch(closeSesion())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(NavMain)
