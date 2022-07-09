import { useEffect, useState} from 'react'

const ButtonsOptions = ({children}) => {

  const [openMenu, setOpenMenu] = useState()

  const toggleMenu = () => {
    if (!openMenu) {
      setOpenMenu("menu_ul_options_active")
    }
    else {
      setOpenMenu()
      window.removeEventListener("click", toggleMenu)
    } 
  }

  useEffect(()=> {
    if (openMenu) {
      setTimeout(()=> {
        window.addEventListener("click", toggleMenu)
      }, 100)
    }
  })

  return (
    <div className='options_config' onClick={toggleMenu}>
      <svg  width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z" fill="#4E4E4E" />
        <path d="M4 14C4 15.1046 3.10457 16 2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14Z" fill="#4E4E4E" />
        <path d="M4 8C4 9.10457 3.10457 10 2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8Z" fill="#4E4E4E" />
      </svg>
      <ul className={`menu_ul_options ${openMenu}`}>
        {
          children.length
          ? children.map((child, i) => <li key={i}> {child} </li>)
          : <li> {children} </li>
        }
      </ul>
    </div>
  )
}

export default ButtonsOptions
