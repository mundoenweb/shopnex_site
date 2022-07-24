// redux
import { connect } from 'react-redux'
// components
import { Navigate, Outlet } from 'react-router-dom'
// utils
import auth from '../../utils/auth'

const Private = ({ user }) => {
  const session = auth(user)
  if (!session) return <Navigate to="/" />
  return <Outlet />
}

const mapStateToProps = (state) => ({
  user: state.user.data
})


export default connect(mapStateToProps)(Private)
