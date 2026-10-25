import React from 'react'

const Button = ({ className, text, submit }) => {
  return (
    <button
      type={submit}
      className={className}
    >
      {text}
    </button>
  )
}

export default Button
