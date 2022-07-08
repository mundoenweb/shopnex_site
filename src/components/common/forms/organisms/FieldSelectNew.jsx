import MsgErrorFields from "../atoms/MsgErrorFields"

const FieldSelectNew = ({
  title,
  name,
  options,
  register,
  validate,
  errors
}) => {

  return (
    <div>
      <label htmlFor={name}>{title || name}</label>
      <select
        name={name}
        id={name}
        { ...register(name, validate) }
      >
        <option></option>
        {
          options && options.map(o => (
            <option key={o.id} value={o.id}> {o.name} </option>
          ))
        }
      </select>
      <MsgErrorFields error={errors} name={name} />
    </div>
  )
}

export default FieldSelectNew
