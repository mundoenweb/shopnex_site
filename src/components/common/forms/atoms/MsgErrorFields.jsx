const MsgErrorFields = ({
  error,
  minLengt,
  name
}) => {
  return (
    <>
      {
        error?.[name] &&
        <span className="form_err_span">
          {
            error?.[name]?.type === "required" &&
            `Favor rellene el campo`
          }
          {
            error?.[name]?.type === "minLength" &&
            `debe tener minimo ${minLengt} caracteres`
          }
        </span>
      }
    </>
  )
}

export default MsgErrorFields
