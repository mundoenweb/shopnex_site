import { useEffect } from "react"
import MsgErrorFields from "../atoms/MsgErrorFields"

const FieldInputText = ({
  type,
  name,
  title,
  register,
  validate,
  error,
  minLengt,
  defaultValue
}) => {
  useEffect(() => {
    if (defaultValue) {
      document.getElementById(name).value = defaultValue || ""
    }
  }, [defaultValue, name])

  return (
    <label htmlFor={name}>{title || name}
      {console.log(error[name])}
      <input
        type={type}
        name={name}
        id={name}
        {...register(name, validate)}
      />

      <MsgErrorFields
        error={error}
        minLengt={minLengt}
        name={name}
      />
    </label>
  )
}

export default FieldInputText
