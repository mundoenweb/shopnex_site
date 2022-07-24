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
      id: 2, name: 'Perfil', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Mis datos', path: '/usuario' },
        { id: 2, name: 'Actualizar datos', path: '/usuario/actualizar_datos' },
        { id: 3, name: 'Verificar cuenta', path: '/usuario/credenciales' },
        { id: 4, name: 'Mis referidos', path: '/usuario/referidos' },
        { id: 5, name: 'Agregar cuenta bancaria', path: '/usuario/crear_cuenta' },
      ]
    },
    {
      id: 3, name: 'Gestor de Tareas', path: '/', stlChilUl: '',
      childs: [
        { id: 1, name: 'Tareas Pendientes', path: '/tareas' },
        { id: 2, name: 'Historial de tareas', path: '/tareas/historial' }
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
            <li className={`li_main_nav`}>
              <Link
                to={'/inicio'}
                className="li_main_nav_a"
              >
                Inicio
              </Link>
            </li>
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
                to={'/susbcripciones'}
                className="li_main_nav_a"
              >
                Sube a premiun
              </Link>
            </li>
            <li className={`li_main_nav`}>
              <Link
                to={'/noticias'}
                className="li_main_nav_a"
              >
                Noticias
              </Link>
            </li>
            <li className={`li_main_nav`}>
              <Link
                to={'/ayuda'}
                className="li_main_nav_a"
              >
                Ayuda
              </Link>
            </li>
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
  name: state.user.data.name,
  email: state.user.data.email,
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
