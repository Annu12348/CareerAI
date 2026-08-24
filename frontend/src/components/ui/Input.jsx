import React from 'react'

const Input = ({ label, text, placeholder, value, onChange, name, error }) => {
  return (
    <div className='w-full mt-1'>
      <label className='text-sm tracking-tight capitalize '>
        {label} *
      </label>
      <input
        className='w-full p-3  border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm '
        type={text}
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
