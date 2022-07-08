const Button = ({ type, title, className }) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
        >
            {title}
        </button>
    )
}

export default Button
