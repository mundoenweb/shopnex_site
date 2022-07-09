import { connect } from "react-redux"
import { openMenuMovil } from "../../redux/actionCreators"

const Header = ({
  openNavMain
}) => {
  return (
    <header className="header">
      <img
        onClick={() => openNavMain('open_nav_movil')}
        src={"/images/nav/menu.svg"}
        alt="menu"
        className="nav_movil"
      />
      <span className="title_header">Lista Usuarios</span>
    </header>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  openNavMain(style) {
    dispatch(openMenuMovil(style))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
