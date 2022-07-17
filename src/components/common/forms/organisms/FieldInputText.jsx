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

  return (
    <label htmlFor={name}>{title || name}
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
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
