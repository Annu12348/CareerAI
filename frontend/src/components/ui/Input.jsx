import React from 'react'

const Input = ({ type, placeholder, value, onChange, name, error, className }) => {
  return (
    <div className='w-full'>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
