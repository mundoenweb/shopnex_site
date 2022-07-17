const auth = (user) => {
  let session = false
  if (user.token) session = true
  return session
}

export default auth
