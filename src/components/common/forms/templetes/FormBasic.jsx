import React from 'react'

const FormBasic = ({ children, className, title, submit, reference }) => {
    return (
        <form
            className={className || ""}
            onSubmit={submit}
            ref={reference}
        >
            {
                title && <h1 className="t2 title_form">{title}</h1>
            }
            {children}
        </form>
    )
}

export default FormBasic
