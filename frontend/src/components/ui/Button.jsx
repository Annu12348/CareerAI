import React from 'react'

const Button = ({ text, submit }) => {
  return (
    <button
      type={submit}
      className='mt-4 bg-blue-500 w-full p-3 capitalize rounded-md cursor-pointer hover:bg-blue-600 mb-2 text-white font-semibold '
    >
      {text}
    </button>
  )
}

export default Button
