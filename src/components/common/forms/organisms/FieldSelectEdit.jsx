import { useEffect, useRef } from "react"

const FieldSelectEdit = ({
  title,
  name,
  options,
  value
}) => {

  const reference = useRef()

  useEffect(() => {
    if (value) {
      const select = reference.current
      select.value = value
    }
  }, [value])

  return (
    <div>
      <label htmlFor={name}>{title || name}</label>
      <select
        name={name}
        id={name}
        ref={reference}
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
