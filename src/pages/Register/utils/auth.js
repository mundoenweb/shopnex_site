const auth = (token, typeUser) => {
  let session = false
  if (token && typeUser === 1) session = token
  return session
}

export default auth
