const FieldSelectEdit = ({
  title,
  name,
  options,
  value
}) => {
  console.log(value)
  return (
    <div>
      <label htmlFor={name}>{title || name}</label>
      <select
        name={name}
        id={name}
        defaultValue={value}
      >
        <option></option>
        {
          options && options.map(o => (
            <option key={o.id} value={o.id}> {o.name} </option>
          ))
        }
      </select>
    </div>
  )
}

export default FieldSelectEdit
