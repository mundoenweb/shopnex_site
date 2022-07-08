import nProgress from "nprogress";

const errMsg = {
  error: `Lo sentimos hubo un error inesperado favor intente más tarde.
Error: `, // no modificar el salto de linea
  internet: "Fallan en la conección de internet",
  jsonParse: "Error al convertir el json enviado por el servidor",
  unAuthorized: "No tienes permiso para acceder", // 401
  notFound: "recurso no encontrado, favor intente más tarde", // 404
  conflict: "Se presento un conflicto, es probable un campo no haya pasado la validación o que falte", // 409
  internalServer: "Lo sentinos en estos momentos no podemos procesar su solisitud: Error 500", // 500
  serverUnavailable: "Servidor en mantenimiento", // 503
}

const checkStatus = (response) => {
  switch (response.status) {
    case 401:
      throw Error(errMsg.unAuthorized);
    case 404:
      throw Error(errMsg.notFound);
    case 409:
      throw Error(errMsg.conflict);
    case 500:
      throw Error(errMsg.internalServer);
    case 503:
      throw Error(errMsg.serverUnavailable);
    default:
      if (!response.ok) {
        throw Error(`${errMsg.error}: ${response.statusText} ${response.status}`);
      }
  }
  return response
}

const checkJsonParse = async (response) => {
  try {
    return await response.json()
  } catch {
    throw Error(errMsg.jsonParse);
  }
}
const addToHeaders = (header, headers) => {
  for (const key in headers) {
    header.append(key, headers[key])
  }
}
const errorController = (err, defaultAlert) => {
  const msg = err.message
  let message = msg

  if (msg === "Failed to fetch") message = errMsg.internet

  if (defaultAlert) alert(message)
  nProgress.done()
  return message
}

const ajax = async (
  endPoint,
  method,
  dataRequest,
  newHeaders
) => {

  let data, error
  let myInit = { method: "GET" }
  const headers = new Headers()


  if (method) myInit.method = method

  if (newHeaders) addToHeaders(headers, newHeaders)

  if (dataRequest && Object.entries(dataRequest).length) {
    headers.append('Content-Type', 'application/json')
    myInit.body = JSON.stringify(dataRequest)
  } else {
    myInit.body = dataRequest
  }

  myInit.headers = headers

  data = await fetch(endPoint, myInit)
    .then(checkStatus)
    .then(checkJsonParse)
    .catch(err => {
      // Si desea personalizar sus mensajes alerta,
      // favor no pase el segundo parametro o paselo como false
      error = errorController(err, true)
    })

  return [data, error]
}

export default ajax
